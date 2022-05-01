// colores rgb
// sintaxis = rgb (xxx,xxx,xxx);
function primerNumero() {
    let num = '012';
    let lar = num.length
    let primerNum = num.charAt(Math.floor(Math.random() * lar));
    return primerNum
}

function color1() {
    let digitos = '0123456789';
    let largo = digitos.length;
    let colores = '';
    for (let i = 0; i < 2; i++) {
        colores += digitos.charAt(Math.floor(Math.random() * largo))
    }
    return colores
}

function color2() {
    let digitos = '0123456789';
    let largo = digitos.length;
    let colores = '';
    for (let i = 0; i < 2; i++) {
        colores += digitos.charAt(Math.floor(Math.random() * largo))
    }
    return colores
}

function color3() {
    let digitos = '0123456789';
    let largo = digitos.length;
    let colores = '';
    for (let i = 0; i < 2; i++) {
        colores += digitos.charAt(Math.floor(Math.random() * largo))
    }
    return colores
}

// boton para generar los colores
const boton2 = document.getElementById('btn2');

boton2.addEventListener('click', ()=>{
    primerNumero();
    color1();
    color2();
    color3();
    const rgb = primerNumero() + color1();
    const rgb1 = primerNumero() + color2();
    const rgb2 = primerNumero() + color3();
    const rgbColor = `rgb(${rgb},${rgb1},${rgb2})`;

    const inp = document.getElementById('input2');
    const dis = document.getElementById('display2');
    inp.value = rgbColor;
    dis.style.background = rgbColor;
})
