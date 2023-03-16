/*   {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Budimir",
        "last": "Rozhankovskiy"
      },
      "dob": {
        "date": "1973-11-03T18:05:21.699Z",
        "age": 49
      },
      "phone": "(068) T17-0455",
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/81.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/81.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/81.jpg"
      },
      "nat": "UA"
    }, */
const createCard = (imgSrc, titleText, pText, btnText, link) => {
    // Create card
    let divCard = document.createElement("div");
    divCard.classList.add("card");
    let imgCard = document.createElement("img");
    imgCard.classList.add("card-img-top");
    imgCard.src = imgSrc;
    // card body
    let divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    let pCard = document.createElement("p");
    pCard.classList.add("card-text");
    let btn = document.createElement("button");
    btn.classList.add("btn", "btn-primary");
    // Create content
    cardTitle.innerText = titleText;
    pCard.innerText = pText;
    btn.innerText = btnText;
    btn.setAttribute("href", link);
    // Insert content
    divCardBody.append(cardTitle, pCard, btn);
    divCard.append(imgCard, divCardBody);
    return divCard;
};

export { createCard };