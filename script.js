// Définir les variables
var myInput = document.getElementById('psw')
var letter = document.getElementById('letter')
var capital = document.getElementById('capital')
var number = document.getElementById('number')
var length = document.getElementById('length')

// Affichage de la boîte message si clic sur le champ du mdp
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block"
}

// Disparition de la boîte message si clic en dehors du champ
myInput.onblur = function() {
    document.getElementById("message").style.display = "none"
}

// Action lorsque l'utilisateur écrit dans le champ
myInput.onkeyup = function() {
    var lowerCaseLetters = /[a-z]/g
    // Modifier l'affichage en fonction de la présence d'une minuscule ou non
    if(myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove('invalid')
        letter.classList.add('valid')
    } else {
        letter.classList.remove('valid')
        letter.classList.add('invalid')
    }
    var upperCaseLetters = /[A-Z]/g
    // Modifier l'affichage en fonction de la présence d'une majuscule ou non
    if(myInput.value.match(upperCaseLetters)) {
        capital.classList.remove('invalid')
        capital.classList.add('valid')
    } else {
        capital.classList.remove('valid')
        capital.classList.add('invalid')
    }
    var numbers = /[0-9]/g
    // Modifier l'affichage en fonction de la présence d'un nombre ou non
    if(myInput.value.match(numbers)) {
        number.classList.remove('invalid')
        number.classList.add('valid')
    } else {
        number.classList.remove('valid')
        number.classList.add('invalid')
    }
    // Modifier l'affichage en fonction du nombre de caractères
    if(myInput.value.length >= 8) {
        length.classList.remove('invalid')
        length.classList.add('valid')
    } else {
        length.classList.remove('valid')
        length.classList.add('invalid')
    }
}