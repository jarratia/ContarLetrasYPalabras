const texto = document.querySelector("#texto-entrada").textContent.toLowerCase().replace(/[^a-z0-9+]+/gi, '');
const texto_dos = document.querySelector("#texto-entrada").textContent.toLowerCase()

const chars = texto.split('');
const words = texto_dos.split(' ');

function contarLetras (parrafo){
    let contador = {};

    for (let i in parrafo) {
        let letra = parrafo[i]

        if (!contador[letra]) {
            contador[letra] = 0;
        }
        contador[letra]++;
    }

    for (let [key, value] in contador) {
        tags('p', `<strong>${key}</strong>: ${contador[key]}` );
    }

    return contador;
}

function contarPalabra (parrafo){
    let contador_palabra = [];

    for (let i in parrafo) {
        let palabra = parrafo[i]

        if (!contador_palabra[palabra]) {
            contador_palabra[palabra] = 0;
        }
        contador_palabra[palabra]++;
    }

    for (let word in contador_palabra) {
        tags('p', `<strong>${word}</strong>: ${contador_palabra[word]}` );
    }

    return contador_palabra;
}

function tags(tag, text) {
    let current_tag = document.createElement(tag);
    current_tag.innerHTML = text;
    document.body.appendChild(current_tag);
}

contarLetras(chars);
document.write('__________________________________________________');
contarPalabra(words);
