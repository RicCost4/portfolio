function carregar(){
    let cab = document.getElementById('cabecalho') //cabeçalho
    let foo = document.getElementById('rodape') //rodapé

    let ano = new Date()
    let year = ano.getFullYear()
    
    //cabeçalho
    cab.innerHTML = `<h1>Richard Artur Rodrigues Costa</h1><p>Meu Portfólio</p>`

    //rodapé
    foo.innerHTML = `Esse site foi criado pelo <a href="https://github.com/RicCost4" target="_blank">@Richard</a> como consolidação dos estudos e apresentação profissional, 2022 - ${year}.`
}
