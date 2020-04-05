
window.addEventListener("DOMContentLoaded", getData);

function getData() {
    fetch("https://owldesign.dk/wordpress/wp-json/wp/v2/house")
        .then(e => e.json())
        .then(sortData);
}

function sortData (f) {
    f.forEach((i)=> {

    console.log(i);

    const template = document.querySelector("template").content;
    const clone = template.cloneNode(true);

    console.log(i.house_picture.guid);

    clone.querySelector("img").src = i.house_picture.guid;
    clone.querySelector(".street_address").textContent = i.address;
    clone.querySelector(".city_address").textContent = i.city;
    clone.querySelector(".number_bed").textContent = i.bed;
    clone.querySelector(".number_bath").textContent = i.bath;
    clone.querySelector(".number_square").textContent = i.space;

    document.querySelector("main").appendChild(clone);
})};

