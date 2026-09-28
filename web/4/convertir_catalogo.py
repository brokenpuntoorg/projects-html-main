import os
import re
import json
import csv

CARPETA_PROYECTO = "." 

def convertir_anos(texto):
    s = str(texto).strip()
    if not s:
        return None, None
    if '-' in s:
        partes = s.split('-')
        try:
            p0 = int(partes[0].strip())
            p1 = int(partes[1].strip())
            y0 = 1900 + p0 if p0 >= 50 else (2000 + p0 if p0 < 50 else p0)
            y1 = 1900 + p1 if p1 >= 50 else (2000 + p1 if p1 < 50 else p1)
            return y0, y1
        except:
            return None, None
    else:
        try:
            n = int(s)
            y = 1900 + n if (n >= 50 and n < 100) else (2000 + n if n < 50 else n)
            return y, y
        except:
            return None, None

def procesar_archivo_html(ruta):
    try:
        with open(ruta, 'r', encoding='utf-8', errors='ignore') as f:
            html = f.read()
    except Exception as e:
        return None

    # 1. Código de refacción
    m_cod = re.search(r'class="product-model"[^>]*>([^<]+)<', html, re.I)
    codigo = m_cod.group(1).strip() if m_cod else os.path.splitext(os.path.basename(ruta))[0]

    # 2. Marca / Línea
    m_marca = re.search(r'class="product-brand"[^>]*>([^<]+)<', html, re.I)
    marca = m_marca.group(1).strip() if m_marca else "CHRYSLER / DODGE"

    # 3. Título / Sistema
    m_tit = re.search(r'<h1[^>]*>([^<]+)<', html, re.I)
    sistema = m_tit.group(1).strip() if m_tit else "SISTEMA DE ENCENDIDO"

    # 4. Imagen del producto
    m_img = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.I)
    imagen = m_img.group(1).strip() if m_img else ""

    # 5. Especificaciones del Producto (extrae Tipo, Rango de Motor, Calidad, etc.)
    especificaciones = []
    # Busca todos los párrafos con etiquetas <strong>Nombre:</strong> Valor
    m_specs = re.findall(r'<p>\s*<strong>([^<:]+):?</strong>\s*([^<]+)</p>', html, re.I)
    for nombre, valor in m_specs:
        especificaciones.append({
            "clave": nombre.strip(),
            "valor": valor.strip()
        })

    # Tipo para la tarjeta rápida
    tipo = "Refacción"
    for s in especificaciones:
        if s["clave"].lower() == "tipo":
            tipo = s["valor"]
            break

    # 6. Referencias Técnicas / Cruzadas (Kem, Injetech, Tecnofuel, Motorcraft...)
    referencias_tecnicas = []
    for m in re.finditer(r'<li>\s*<strong>([^<:]+):?</strong>\s*([^<]+)</li>', html, re.I):
        referencias_tecnicas.append({
            "marca": m.group(1).strip(),
            "codigo": m.group(2).strip()
        })

    # 7. Tabla de Aplicaciones Principales
    aplicaciones = []
    for tr in re.findall(r'<tr[^>]*>(.*?)</tr>', html, re.I | re.DOTALL):
        tds = re.findall(r'<td[^>]*>(.*?)</td>', tr, re.I | re.DOTALL)
        if len(tds) >= 4:
            modelo = re.sub(r'<[^>]+>', '', tds[0]).strip()
            anos_str = re.sub(r'<[^>]+>', '', tds[1]).strip()
            motor = re.sub(r'<[^>]+>', '', tds[2]).strip()
            cilindros = re.sub(r'<[^>]+>', '', tds[3]).strip()
            y_ini, y_fin = convertir_anos(anos_str)

            aplicaciones.append({
                "marca": marca,
                "modelo": modelo,
                "anos_texto": anos_str,
                "ano_inicio": y_ini,
                "ano_fin": y_fin,
                "motor": motor,
                "cilindros": cilindros
            })

    return {
        "codigo": codigo,
        "marca": marca,
        "sistema": sistema,
        "tipo": tipo,
        "especificaciones": especificaciones,
        "referencias_tecnicas": referencias_tecnicas,
        "imagen": imagen,
        "aplicaciones": aplicaciones
    }

def main():
    print("Extrayendo fichas técnicas completas...")
    productos = []
    filas_csv = []

    for raiz, dirs, archivos in os.walk(CARPETA_PROYECTO):
        for archivo in archivos:
            if archivo.endswith(".html") and archivo != "index.html":
                ruta_completa = os.path.join(raiz, archivo)
                item = procesar_archivo_html(ruta_completa)
                if item and item.get("codigo"):
                    productos.append(item)
                    refs_str = " | ".join([f"{r['marca']}: {r['codigo']}" for r in item["referencias_tecnicas"]])
                    for app in item["aplicaciones"]:
                        filas_csv.append({
                            "Codigo": item["codigo"],
                            "Marca": item["marca"],
                            "Sistema": item["sistema"],
                            "Modelo": app["modelo"],
                            "Años": app["anos_texto"],
                            "Motor": app["motor"],
                            "Cilindros": app["cilindros"],
                            "Referencias": refs_str
                        })

    with open("catalogo_completo.json", "w", encoding="utf-8") as f:
        json.dump(productos, f, ensure_ascii=False, indent=2)

    print(f"¡Listo! Se actualizaron {len(productos)} fichas técnicas con todas sus especificaciones.")

if __name__ == "__main__":
    main()