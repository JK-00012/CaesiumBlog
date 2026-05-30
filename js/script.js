/*
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

async function cargarArticulo() {

    const params = new URLSearchParams(window.location.search);

    const tema = params.get("tema");

    if (!tema) {

        document.getElementById("content").innerHTML =
        "<h1>No se especificó ningún artículo.</h1>";

        return;
    }

    try {

        const response = await fetch(`./articulos/biologia/${tema}.md`);

        const markdown = await response.text();

        const html = marked(markdown);

        document.getElementById("content").innerHTML = html;

    } catch (error) {

        document.getElementById("content").innerHTML =
        "<h1>Error cargando artículo.</h1>";

        console.error(error);
    }
}

cargarArticulo();

*/
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

async function cargarArticulo() {

    const params = new URLSearchParams(window.location.search);

    const tema = params.get("tema");

    const response = await fetch(`./articulos/biologia/${tema}.md`);

    const markdown = await response.text();

    const html = marked.parse(markdown);

    document.getElementById("content").innerHTML = html;

    const headings = document.querySelectorAll("#content h2");

    const aside = document.getElementById("sidebar");

    headings.forEach((heading, index) => {

        const id = `section-${index}`;

        heading.id = id;

        const link = document.createElement("a");

        link.href = `#${id}`;

        link.textContent = heading.textContent;

        aside.appendChild(link);

        aside.appendChild(document.createElement("br"));
    });
}

cargarArticulo();


// codigo nuevo
const btn = document.getElementById("toggleBtn");
const sidebar = document.querySelector("aside");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});