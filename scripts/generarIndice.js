const fs = require("fs");
const path = require("path");

const carpeta = path.join(__dirname, "..", "articulos", "biologia");

const archivos = fs.readdirSync(carpeta);

const articulos = [];

for (const archivo of archivos) {

    if (!archivo.endsWith(".md")) continue;

    const contenido = fs.readFileSync(
        path.join(carpeta, archivo),
        "utf8"
    );

    const titulo = contenido.match(/^#\s+(.*)$/m);

    articulos.push({

        titulo: titulo ? titulo[1] : archivo,

        archivo: archivo.replace(".md", "")

    });

}

fs.writeFileSync(

    path.join(carpeta, "index.json"),

    JSON.stringify(articulos, null, 4)

);

console.log("Índice generado correctamente.");

