
// search
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList .character-card").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});




// index fetch
fetch('http://localhost:3000/superheros')
.then(response => response.json())
.then(characterArray => {
    characterArray.forEach(character => {
        renderCharacterCards(character)
    })
})





function renderCharacterCards(character) {

    let characterContainer = document.querySelector('.character-container')
    let characterCard = document.createElement('div')
    characterContainer.setAttribute('id', 'myList') // this is for search functionality
    characterCard.setAttribute('class', 'character-card') // this is for search functionality



    //image
    let characterImage = document.createElement('img')
    characterImage.setAttribute('class', 'image-size')
    characterImage.src = character.image_url

    //character super name
    let characterName = document.createElement('h3')
    characterName.setAttribute('class', 'character-name')
    characterName.innerText = character.name

    //character real name
    let characterFullName = document.createElement('h5')
    characterFullName.setAttribute('class', 'character-fullname')
    characterFullName.innerText = character.full_name

    let cardNames = document.createElement('div')
    cardNames.setAttribute('class', 'card-names')



    //button-modal feature
    let modalDiv = document.createElement('div')
    modalDiv.setAttribute('data-target', '.bd-example-modal-xl')
    modalDiv.setAttribute('data-toggle', 'modal')
    modalDiv.setAttribute('type', 'button')


    // append shit
    cardNames.append(characterName, characterFullName)
    modalDiv.append(characterImage)
    characterCard.append(modalDiv, cardNames)
    characterContainer.append(characterCard)



    modalDiv.addEventListener('click', event => {
        //following is what happens when you click a character image on card

        let modalHeader = document.querySelector('.modal-header')

        //super name
        let modalHeaderName = document.querySelector('.modal-character-name')
        modalHeaderName.innerText = character.name
        //real name
        let modalHeaderFullname = document.querySelector('.modal-character-fullname')
        modalHeaderFullname.innerText = character.full_name
        //image
        let modalImage = document.querySelector('.modal-image')
        modalImage.src = character.image_url

    })


}

let createButtonDiv = document.querySelector('.create-button-div')
let createButton = document.createElement('button')
createButton.setAttribute('type', 'button')
createButton.setAttribute('data-toggle', 'modal')
createButton.setAttribute('data-target', '#exampleModal')

createButton.innerText = "Create Character"
createButtonDiv.append(createButton)



let saveForm = document.querySelector('.create-form')

saveForm.addEventListener('submit', event => {
    event.preventDefault();
    // debugger

fetch('http://localhost:3000/superheros', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        name: event.target['create-character-name'].value,
        image_url: event.target["create-image-url"].value,
        full_name: event.target["create-character-full-name"].value,
        // name: event.target["bio-text"].value,
        intelligence: event.target["create-character-intelligence"].value,
        strength: event.target["create-character-strength"].value,
        speed: event.target["create-character-speed"].value,
        durability: event.target['create-character-durability'].value,
        power: event.target['create-character-power'].value,
        combat: event.target['create-character-combat'].value,
        height_feet: event.target['create-character-height'].value,
        weight_lbs: event.target['create-character-weight'].value,
        eye_color: event.target['create-character-eye-color'].value,
        hair_color: event.target['create-character-hair-color'].value,
        // universe: event.target['create-character-universe'].value,
        occupation: event.target['create-character-occupation'].value,
        place_of_birth: event.target['create-character-birth'].value,
        relatives: event.target['create-character-relatives'].value,
    })
})
.then(res => res.json())
.then(newCharObj => {
    renderCharacterCards(newCharObj)
    const modal = document.getElementById('exampleModal')
    modal.classList.toggle('show')
    modal.setAttribute('style', 'display: none')
    modal.removeAttribute('aria-modal')
    modal.setAttribute('aria-hidden', 'true')
    const modalBackdrop = document.querySelector('.modal-backdrop')
    modalBackdrop.remove()
})

})
