








import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

async function cargarArticulo() {

    const response = await fetch("../articulos/celula.md");

    const markdown = await response.text();

    const html = marked(markdown);

    document.getElementById("content").innerHTML = html;
}

cargarArticulo();
