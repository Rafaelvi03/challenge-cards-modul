
const createCard = (picture, gender, title, first, last, date, age, phone, nat) => {
    // Create card
    let divCard = document.createElement("div");
    divCard.classList.add("card");
    let imgCard = document.createElement("img")
    imgCard.classList.add("card-img-top")
    imgCard.src = picture;
    //Card Body
    let divCardBody = document.createElement("div")
    divCardBody.classList.add("card")
    let genderParagraph = document.createElement("p")
    genderParagraph.classList.add("card-text")
    let titleParagraph = document.createElement("p")
    titleParagraph.classList.add("card-text")
    let firstParagraph = document.createElement("p")
    firstParagraph.classList.add("card-text")
    let lastParagraph = document.createElement("p")
    lastParagraph.classList.add("card-text")
    let dateParagraph = document.createElement("p")
    dateParagraph.classList.add("card-text")
    let ageParagraph = document.createElement("p")
    ageParagraph.classList.add("card-text")
    let phoneParagraph = document.createElement("p")
    phoneParagraph.classList.add("card-text")
    let natParagraph = document.createElement("p")
    natParagraph.classList.add("card-text")
    let button = document.createElement("button");
    button.classList.add("btn-primary")
    let cont = document.createTextNode("Agregame")
    button.appendChild(cont)
    //Create Content
    genderParagraph.innerText = gender;
    titleParagraph.innerText = title
    firstParagraph.innerText = first;
    lastParagraph.innerText = last;
    dateParagraph.innerText = date;
    ageParagraph.innerText = age;
    phoneParagraph.innerText = phone;
    natParagraph.innerText = nat;
    //Insert Content
    divCard.append(imgCard, divCardBody)
    divCardBody.append(genderParagraph, titleParagraph, firstParagraph, lastParagraph, dateParagraph, ageParagraph, phoneParagraph, natParagraph, button)
    return divCard;
};

export { createCard }