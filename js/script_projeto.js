function mostrar(div, btn){
    let divs = document.getElementById(div)
    let elem = document.getElementById(btn)

    if(divs.style.display == 'block'){
        elem.innerHTML = '&#8595;'
        divs.style.display = 'none'
    } else{
        elem.innerHTML = '&#8593;'
        divs.style.display = 'block'
    }
}