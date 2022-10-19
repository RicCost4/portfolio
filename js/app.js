function carregar(){
    let data = document.getElementById('data')
    let ano = new Date()
    let year = ano.getFullYear()
    data.innerHTML = `2022 - ${year}`
}