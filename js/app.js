function carregar(){
    const config = {
        "nome": "Richard",
        "sobrenome": "Artur Rodrigues Costa",
        "mensagem": "Meu Portfólio - 'descontinuado'",
        "links":{
            "github": "https://github.com/RicCost4",
            "curriculo": "https://drive.google.com/file/d/1P9_paRr1dDMdg6O04crYYKRb0S_Y-Kdh/view?usp=share_link"
        },
        "emoji":{
            "menu": "&#9776;"
        }
    }

    let cab = document.getElementById('cabecalho') //cabeçalho
    let foo = document.getElementById('rodape') //rodapé
    let Msand = document.getElementById('MSand') //Menu Sanduiche
    let cv = document.getElementById('curriculo') //baixar curriculo

    let ano = new Date()
    let year = ano.getFullYear()
    
    //cabeçalho
    cab.innerHTML = `<h1>${config.nome} ${config.sobrenome}</h1><p>${config.mensagem}</p>`

    //rodapé
    foo.innerHTML = `Esse site foi criado pelo <a href=${config.links.github} target="_blank">@${config.nome}</a> como consolidação dos estudos e apresentação profissional, 2022 - ${year} versão 1.0. - 'descontinuado'`

    //menu
    Msand.innerHTML = `${config.emoji.menu}`

    //baixar curriculo
    cv.innerHTML = `
        <a href=${config.links.curriculo} target="_blank" id="cv"><span class="material-symbols-outlined">move_to_inbox</span> Baixar Curriculo!</a>
    `
}
