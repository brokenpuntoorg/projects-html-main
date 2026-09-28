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

    # Código
    m_cod = re.search(r'class="product-model"[^>]*>([^<]+)<', html, re.I)
    codigo = m_cod.group(1).strip() if m_cod else os.path.splitext(os.path.basename(ruta))[0]

    # Marca
    m_marca = re.search(r'class="product-brand"[^>]*>([^<]+)<', html, re.I)
    marca = m_marca.group(1).strip() if m_marca else "FORD"

    # Sistema / Título
    m_tit = re.search(r'<h1[^>]*>([^<]+)<', html, re.I)
    sistema = m_tit.group(1).strip() if m_tit else "Sistema Automotriz"

    # Imagen
    m_img = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.I)
    imagen = m_img.group(1).strip() if m_img else ""

    # Tipo
    tipo = "Refacción"
    m_tipo = re.search(r'<strong>Tipo:?</strong>\s*([^<]+)<', html, re.I)
    if m_tipo:
        tipo = m_tipo.group(1).strip()

    # Referencias Cruzadas (ej. Motorcraft: DG508)
    cross_refs = []
    for m in re.finditer(r'<li>\s*<strong>([^<:]+):?</strong>\s*([^<]+)</li>', html, re.I):
        cross_refs.append(f"{m.group(1).strip()}: {m.group(2).strip()}")

    # Aplicaciones
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
        "imagen": imagen,
        "referencias_cruzadas": cross_refs,
        "aplicaciones": aplicaciones
    }

def main():
    print("Escaneando tus 2,236 archivos HTML... Espera unos segundos...")
    productos = []
    filas_csv = []

    for raiz, dirs, archivos in os.walk(CARPETA_PROYECTO):
        for archivo in archivos:
            if archivo.endswith(".html") and archivo != "index.html":
                ruta_completa = os.path.join(raiz, archivo)
                item = procesar_archivo_html(ruta_completa)
                if item and item.get("codigo"):
                    productos.append(item)
                    refs_str = " | ".join(item["referencias_cruzadas"])
                    for app in item["aplicaciones"]:
                        filas_csv.append({
                            "Codigo": item["codigo"],
                            "Marca": app["marca"],
                            "Modelo": app["modelo"],
                            "Años": app["anos_texto"],
                            "Año_Inicio": app["ano_inicio"],
                            "Año_Fin": app["ano_fin"],
                            "Motor": app["motor"],
                            "Cilindros": app["cilindros"],
                            "Tipo": item["tipo"],
                            "Sistema": item["sistema"],
                            "Referencias_Cruzadas": refs_str,
                            "Imagen": item["imagen"]
                        })

    # Guardar JSON
    with open("catalogo_completo.json", "w", encoding="utf-8") as f:
        json.dump(productos, f, ensure_ascii=False, indent=2)

    # Guardar CSV para Excel
    if filas_csv:
        with open("catalogo_completo.csv", "w", encoding="utf-8-sig", newline="") as f:
            escritor = csv.DictWriter(f, fieldnames=list(filas_csv[0].keys()))
            escritor.writeheader()
            escritor.writerows(filas_csv)

    print(f"\n¡LISTO! Se procesaron {len(productos)} refacciones con éxito.")
    print("Archivos creados:")
    print(" - catalogo_completo.json (para el buscador web)")
    print(" - catalogo_completo.csv  (para abrir en Excel)")

if __name__ == "__main__":
    main()