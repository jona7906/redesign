document.querySelector("#hillerod_map").addEventListener("click", showHillerod);

document.querySelector("#karlslunde_map").addEventListener("click", showKarlslunde);


function showHillerod() {
    document.querySelector("#front_map_karlslunde").classList.add("front_map_02");
    document.querySelector("#front_map_hillerod").classList.remove("front_map_02");
}

function showKarlslunde() {
    document.querySelector("#front_map_hillerod").classList.add("front_map_02");
    document.querySelector("#front_map_karlslunde").classList.remove("front_map_02");
}
