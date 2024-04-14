document.getElementById('b1').addEventListener('click', ApretarBoton, true)
document.getElementById('b2').addEventListener('click', ApretarBoton, true)
document.getElementById('b3').addEventListener('click', ApretarBoton, true)
document.addEventListener('click', BotonColorDocumento)
function ApretarBoton(e) {
    let ref = e.target
    alert(ref.value)
}

function BotonColorDocumento(e) {
    let ref = document.getElementsByTagName('body')
    ref[0].style.backgroundColor = '#f00'
}