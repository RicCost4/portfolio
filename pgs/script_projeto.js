function mostrar(div, btn){
    let divs = document.getElementById(div)
    let elem = document.getElementById(btn)
    let disp = divs.style.display

    if(disp == 'none'){
        elem.innerHTML = '&#8593;'
        divs.style.display = 'block'
    } else{
        elem.innerHTML = '&#8595;'
        divs.style.display = 'none'
    }
}