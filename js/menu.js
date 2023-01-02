import JSON from "./menu.json" assert { type: "json"};

let menuLista = JSON.menu

menuLista.map((lista) => {
    console.log(lista)
})