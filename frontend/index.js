
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

    //edit icon button
    let editIcon = document.createElement('img')
    editIcon.setAttribute('class', 'editIcon')
    editIcon.setAttribute('data-toggle', 'modal')
    editIcon.setAttribute('data-target', '#editModal')
    editIcon.src = './edit.png'

    // append shit
    cardNames.append(characterName, characterFullName, editIcon)
    modalDiv.append(characterImage)
    characterCard.append(modalDiv, cardNames)
    characterContainer.append(characterCard)

    //following is what happens when you click a character image on card
    modalDiv.addEventListener('click', event => {

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

    //following is what happens when you click on edit icon
    editIcon.addEventListener('click', event => {

    let editForm = document.querySelector('.edit-form')

    //pre-populate edit form below
    document.getElementById('edit-character-name').value = character.name
    document.getElementById('edit-image-url').value = character.image_url
    document.getElementById('edit-character-full-name').value = character.full_name
    document.getElementById('edit-character-intelligence').value = character.inetelligence
    document.getElementById('edit-character-strength').value = character.strength
    document.getElementById('edit-character-speed').value = character.speed
    document.getElementById('edit-character-durability').value = character.durability
    document.getElementById('edit-character-power').value = character.power
    document.getElementById('edit-character-combat').value = character.combat
    document.getElementById('edit-character-height').value = character.height_feet
    document.getElementById('edit-character-weight').value = character.weight_lbs
    document.getElementById('edit-character-eye-color').value = character.eye_color
    document.getElementById('edit-character-hair-color').value = character.hair_color
    document.getElementById('edit-character-occupation').value = character.occupation
    document.getElementById('edit-character-birth').value = character.place_of_birth
    document.getElementById('edit-character-relatives').value = character.relatives

    //following is what happens when you click 'save' button on edit form
    editForm.addEventListener('submit', event => {
        event.preventDefault()

        fetch(`http://localhost:3000/superheros/${character.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    name: event.target['edit-character-name'].value,
                    image_url: event.target["edit-image-url"].value,
                    full_name: event.target["edit-character-full-name"].value,
                    intelligence: event.target["edit-character-intelligence"].value,
                    strength: event.target["edit-character-strength"].value,
                    speed: event.target["edit-character-speed"].value,
                    durability: event.target['edit-character-durability'].value,
                    power: event.target['edit-character-power'].value,
                    combat: event.target['edit-character-combat'].value,
                    height_feet: event.target['edit-character-height'].value,
                    weight_lbs: event.target['edit-character-weight'].value,
                    eye_color: event.target['edit-character-eye-color'].value,
                    hair_color: event.target['edit-character-hair-color'].value,
                    occupation: event.target['edit-character-occupation'].value,
                    place_of_birth: event.target['edit-character-birth'].value,
                    relatives: event.target['edit-character-relatives'].value,
                })
            })
            .then(response => response.json())
            .then(updatedCharObj => {
                // debugger
                character.name = updatedCharObj.name
                character.image_url = updatedCharObj.image_url
                character.full_name = updatedCharObj.full_name
                character.intelligence = updatedCharObj.intelligence
                character.strength = updatedCharObj.strength
                character.speed = updatedCharObj.speed
                character.durability = updatedCharObj.durability
                character.power = updatedCharObj.power
                character.combat = updatedCharObj.combat
                character.height_feet = updatedCharObj.height_feet
                character.weight_lbs = updatedCharObj.weight_lbs
                character.eye_color = updatedCharObj.eye_color
                character.hair_color = updatedCharObj.hair_color
                character.occupation = updatedCharObj.occupation
                character.place_of_birth = updatedCharObj.place_of_birth
                character.relatives = updatedCharObj.relatives
            })
    })
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
            occupation: event.target['create-character-occupation'].value,
            place_of_birth: event.target['create-character-birth'].value,
            relatives: event.target['create-character-relatives'].value,
        })
    })
    .then(res => res.json())
    .then(newCharObj => {
        renderCharacterCards(newCharObj)
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
