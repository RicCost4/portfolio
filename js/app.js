function carregar(){
    let data = document.getElementById('data')
    let ano = new Date()
    let year = ano.getFullYear()
    data.innerHTML = `2022 - ${year}`

}
function mostrar(div){
    var divs = document.getElementById(div)
    var disp = divs.style.display
    divs.style.display = disp == 'none' ? 'block' : 'none'
}
