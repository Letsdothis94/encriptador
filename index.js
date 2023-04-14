const encriptar = document.getElementById('encriptar');
const desencriptar = document.getElementById('desencriptar');
const mensaje = document.getElementById('mensaje');
let mensaje2 = document.getElementsByClassName('primer-p');
let resultado = document.getElementById('resultado');

const codigo = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
};

encriptar.onclick = function() {
    let texto = mensaje.value.toLowerCase();
    for (let letra in codigo) {
        texto = texto.split(letra).join(codigo[letra])
    }
    console.log(texto)
    resultado.innerHTML = texto;
    let copy = document.createElement('button');
    copy.setAttribute('id', 'copybtn');
    copy.innerText = 'Copy';
    resultado.appendChild(copy);
    copy.addEventListener('click', function() {
        let copied = texto;
        copied.select;
        // copied.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(texto);
        alert("Copied the text: " + texto);
    })
};

desencriptar.onclick = function() {
    let texto = mensaje.value.toLowerCase();
    texto = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    resultado.innerHTML = texto;
    let copy = document.createElement('button');
    copy.setAttribute('id', 'copybtn');
    copy.innerText = 'Copy';
    resultado.appendChild(copy);
    copy.addEventListener('click', function () {
        let copied = texto;
        copied.select;
        // copied.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(texto);
        alert("Copied the text: " + texto);
    })
};

// Respuesta utilanzo if/else 

// encriptar.onclick = function() {
//     let texto = mensaje.value;
//     let encriptado = [];
//     for(let i = 0; i < texto.length; i++) {
//             console.log(texto[i]);
//             if(texto[i] === 'e') {
//                 encriptado.push('enter')
//             } else if(texto[i] === 'i') {
//                 encriptado.push('imes')
//             } else if(texto[i] === 'a') {
//                 encriptado.push('ai') 
//             } else if(texto[i] === 'o') {
//                 encriptado.push('ober') 
//             } else if(texto[i] === 'u') {
//                 encriptado.push('ufat')
//             } else {
//                 encriptado.push(texto[i]);
//             }
//     }
//     console.log(encriptado.join(''));
// };