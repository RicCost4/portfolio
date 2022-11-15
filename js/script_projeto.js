function mostrar(div, btn){
    const config = {
        "emoji":{
            "setaCima": "&#8593;",
            "setaBaixo": "&#8595;"
        }
    }

    let divs = document.getElementById(div)
    let elem = document.getElementById(btn)

    if(divs.style.display == 'block'){
        elem.innerHTML = config.emoji.setaBaixo
        divs.style.display = 'none'
    } else{
        elem.innerHTML = config.emoji.setaCima
        divs.style.display = 'block'
    }
}