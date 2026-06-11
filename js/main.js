
const response = await fetch("./articulos/biologia/index.json");

const articulos = await response.json();






const indice = document.getElementById("indice");

articulos.forEach(articulo => {

    const link = document.createElement("a");

    link.href = `articles.html?tema=${articulo.archivo}`;

    link.textContent = articulo.titulo;

    indice.appendChild(link);

    indice.appendChild(document.createElement("br"));

});

