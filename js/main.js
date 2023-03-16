import { getKoders, deleteKoder } from "./api.js";
import { createCard } from "./getCard.js";

let koders = await getKoders()
let arrayPeople = koders.results
const printCards = () => {
    let wrapper = document.getElementById("card-wrapper");
    arrayPeople.forEach(koders => {
        let { gender, name, nat, dob, picture, phone } = koders
        let { title, first, last } = name
        let { date, age } = dob
        let { large, medium, thumbnail } = picture
        let col = document.createElement("div");
        col.classList.add("col");
        col.appendChild(createCard(large, gender, title, first, last, date, age, phone, nat));
        wrapper.append(col);
    });
};
printCards();


