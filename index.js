document.querySelector("#hillerod_map").addEventListener("click", showHillerod);

document.querySelector("#karlslunde_map").addEventListener("click", showKarlslunde);


function showHillerod() {
    document.querySelector("#front_map_karlslunde").classList.add("hide_map");
    document.querySelector("#front_map_hillerod").classList.remove("hide_map");
}

function showKarlslunde() {
    document.querySelector("#front_map_hillerod").classList.add("hide_map");
    document.querySelector("#front_map_karlslunde").classList.remove("hide_map");
}
