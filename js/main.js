import { getKoders, deleteKoder, URLAPI } from "./api.js";
import { createCard } from "./getCard.js";


const printCards = () => {
    let wrapper = document.getElementById("card-wrapper");
    results.forEach((item) => {
        let { gender, name, nat, dob, picture, phone } = item
        let { title, first, last } = name
        let { date, age } = dob
        let { large, medium, thumbnail } = picture

        let col = document.createElement("div");
        col.classList.add("col");
        col.appendChild(getKoders.createCard(large, first, age, agregar, link));
        wrapper.append(col);
    });
};
getKoders()
printCards();