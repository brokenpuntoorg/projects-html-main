// Cargar header
        fetch("header.html")
          .then(response => {
            if (!response.ok) throw new Error("No se pudo cargar header");
            return response.text();
          })
          .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
          })
          .catch(error => console.error(error));

        // Cargar footer
        fetch("footer.html")
          .then(response => {
            if (!response.ok) throw new Error("No se pudo cargar footer");
            return response.text();
          })
          .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
          })
          .catch(error => console.error(error));