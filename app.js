// colores con #
function generate() {
    let digitos = '0123456789abcdef';
    let largo = digitos.length;
    let colores = '';
    for (let i = 0; i < 6; i++) {
        colores += digitos.charAt(Math.floor(Math.random() * largo))
    }
    return colores
}

const generador = document.getElementById('btn');

generador.addEventListener('click',()=>{
    generate()
    const color = `#${generate()}`;
    const input = document.getElementById('input');
    const display = document.getElementById('display');
    input.value = color;
    display.style.background = color;
  
})
