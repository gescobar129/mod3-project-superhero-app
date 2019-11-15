
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
}).catch(err => console.log('ERROR', err))

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
    characterName.innerText = uppercase(character.name)

    //character real name
    let characterFullName = document.createElement('h5')
    characterFullName.setAttribute('class', 'character-fullname')
    characterFullName.innerText = character.full_name

    //card under the image div
    let cardNames = document.createElement('div')
    cardNames.setAttribute('class', 'card-names')

    //button-modal feature
    let modalDiv = document.createElement('div')
    modalDiv.setAttribute('data-target', '.bd-example-modal-xl')
    modalDiv.setAttribute('data-toggle', 'modal')
    modalDiv.setAttribute('type', 'button')

    //icons div
    let iconsDiv = document.createElement('div')
    iconsDiv.setAttribute('class', 'icons-div')

    //edit icon button
    let editIcon = document.createElement('img')
    editIcon.setAttribute('class', 'editIcon')
    editIcon.setAttribute('data-toggle', 'modal')
    editIcon.setAttribute('data-target', '#editModal')
    editIcon.src = './pencil.png'

    //heart icon button
    let heartIcon = document.createElement('img')
    heartIcon.src = './heart.png'
    heartIcon.setAttribute('class', 'heartIcon')

    //like number
    let likeCounter = document.createElement('div')
    likeCounter.setAttribute('class', 'like-count')
    likeCounter.innerText = character.likes.length




    // append shit
    iconsDiv.append(editIcon, heartIcon, likeCounter)
    cardNames.append(characterName, characterFullName, iconsDiv)
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


        // start chart here

        var ctx = document.getElementById('intelligence').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: ['Intelligence',],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.75)',
                      'rgba(177, 177, 177, 0.75)',
                    ],

                    borderColor: 'rgb(112, 112, 112)',
                    data: [
                      character.intelligence,
                      100 - character.intelligence]
                }]
            },

            // Configuration options go here
            options: {events: ['click']}
        });
        chart.canvas.parentNode.style.height = '200px';
        chart.canvas.parentNode.style.width = '1000px';





        var ctx = document.getElementById('strength').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: ["Strength",],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: [
                      'rgba(255, 206, 86, 0.75)',
                      'rgba(177, 177, 177, 0.75)',
                    ],

                    borderColor: 'rgb(112, 112, 112)',
                    data: [
                      character.strength,
                      100 - character.strength]
                }]
            },

            // Configuration options go here
            options: {events: ['click']}
        });
        chart.canvas.parentNode.style.height = '200px';
        chart.canvas.parentNode.style.width = '1000px';




        var ctx = document.getElementById('speed').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: ["Speed",],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: [
                      'rgba(75, 192, 192, 0.75)',
                      'rgba(177, 177, 177, 0.75)',
                    ],

                    borderColor: 'rgb(112, 112, 112)',
                    data: [
                      character.speed,
                      100 - character.speed]
                }]
            },

            // Configuration options go here
            options: {events: ['click']}
        });
        chart.canvas.parentNode.style.height = '200px';
        chart.canvas.parentNode.style.width = '1000px';



        var ctx = document.getElementById('durability').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: ["Durability",],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: [
                      'rgba(153, 102, 255, 0.75)',
                      'rgba(177, 177, 177, 0.75)',
                    ],

                    borderColor: 'rgb(112, 112, 112)',
                    data: [
                      character.durability,
                      100 - character.durability]
                }]
            },

            // Configuration options go here
            options: {events: ['click']}
        });
        chart.canvas.parentNode.style.height = '200px';
        chart.canvas.parentNode.style.width = '1000px';



        var ctx = document.getElementById('power').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: ["Power",],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: [
                      'rgba(255, 159, 64, 0.75)',
                      'rgba(177, 177, 177, 0.75)',
                    ],

                    borderColor: 'rgb(112, 112, 112)',
                    data: [
                      character.power,
                      100 - character.power]
                }]
            },

            // Configuration options go here
            options: {events: ['click']}
        });
        chart.canvas.parentNode.style.height = '200px';
        chart.canvas.parentNode.style.width = '1000px';



        var ctx = document.getElementById('combat').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: ["Combat",],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: [
                      'rgba(45, 124, 235, 0.75)',
                      'rgba(177, 177, 177, 0.75)',
                    ],

                    borderColor: 'rgb(112, 112, 112)',
                    data: [
                      character.combat,
                      100 - character.combat]
                }]
            },

            // Configuration options go here
            options: {events: ['click']}
        });
        chart.canvas.parentNode.style.height = '200px';
        chart.canvas.parentNode.style.width = '1000px';

        // end chart here

        let charHeight = document.querySelector('.char-height')
        charHeight.innerText = character.height_feet

        let charWeight = document.querySelector('.char-weight')
        charWeight.innerText = character.weight_lbs

        let charEyeColor = document.querySelector('.char-eye-color')
        charEyeColor.innerText = character.eye_color

        let charHairColor = document.querySelector('.char-hair-color')
        charHairColor.innerText = character.hair_color

        let charOccupation = document.querySelector('.char-occupation')
        charOccupation.innerText = character.occupation

        let charOrigin = document.querySelector('.char-origin')
        charOrigin.innerText = character.place_of_birth

        let charRelatives = document.querySelector('.char-relatives')
        charRelatives.innerText = character.relatives

    })

    heartIcon.addEventListener('click', event => {
      fetch(`http://localhost:3000/likes`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          superhero_id: character.id
        })
      })
      .then(res => res.json())
      .then(likeObj => {
        let number = parseInt(likeCounter.innerText)
        likeCounter.innerText = ''
        likeCounter.innerText = number + 1
      })
    })


    //following is what happens when you click on edit icon
    editIcon.addEventListener('click', event => {

    let editForm = document.querySelector('.edit-form')

    //pre-populate edit form below
    document.getElementById('edit-character-name').value = character.name
    document.getElementById('edit-image-url').value = character.image_url
    document.getElementById('edit-character-full-name').value = character.full_name
    document.getElementById('edit-character-intelligence').value = character.intelligence
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
                    name: uppercase(event.target['edit-character-name'].value),
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
            .then(() => {
                fetch('http://localhost:3000/superheros')
                .then(response => response.json())
                .then(characterArray => {
                    characterContainer.innerHTML = ''
                    $('#editModal').modal('hide')
                characterArray.forEach(character => {
                renderCharacterCards(character)
            })
        })
    })
})
})
}

let createButtonDiv = document.querySelector('.create-button-div')
let createButton = document.createElement('button')
createButton.setAttribute('type', 'button')
createButton.setAttribute('data-toggle', 'modal')
createButton.setAttribute('data-target', '#createModal')
createButton.setAttribute('class', 'button b-red')

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
            name: uppercase(event.target['create-character-name'].value),
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
      let characterContainer = document.querySelector('.character-container')




        renderCharacterCards(newCharObj)
        characterContainer.innerHTML = ''

        fetch('http://localhost:3000/superheros')
        .then(response => response.json())
        .then(characterArray => {
            characterArray.forEach(character => {
                renderCharacterCards(character)
            })
        }).catch(err => console.log('ERROR', err))
        // const modal = document.getElementById('exampleModal')
        // modal.setAttribute('style', 'display: none')
        // modal.classList.remove('show');
        // modal.removeAttribute('aria-modal')
        // modal.setAttribute('aria-hidden', 'true')
        // const modalBackdrop = document.querySelector('.modal-backdrop')
        // modalBackdrop.remove()
        $('#createModal').modal('hide')
        location.reload(true)
    })
})



function uppercase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
