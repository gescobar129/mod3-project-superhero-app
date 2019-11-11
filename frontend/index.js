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
    characterCard.setAttribute('class', 'character-card')

    
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
    let button = document.createElement('button')
    button.setAttribute('data-target', '.bd-example-modal-xl')
    button.setAttribute('data-toggle', 'modal')
    button.setAttribute('type', 'button')

    //appending shit
    cardNames.append(characterName, characterFullName)
    characterCard.append(characterImage, cardNames)
    button.append(characterCard) //I wrapped the characterCard in a button so modal can work
    characterContainer.append(button)


    button.addEventListener('click', event => {
        //following is what happens when you click a character card
        
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

        // debugger
    })
}
