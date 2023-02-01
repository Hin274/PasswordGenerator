let characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let passwordLength = 8
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let passwordLengthtext = document.getElementById("password-length")
let symbolsRemoved = false
let numbersRemoved = false
let symbols = document.getElementById("symbols")
let numbers = document.getElementById("numbers")

passwordLengthtext.textContent = "Password Length: " + passwordLength

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""

    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}


function displayGeneratedPasswords() {
    const generatedPasswordOne = generateRandomPassword()
    const generatedPasswordTwo = generateRandomPassword()
    passwordOne.textContent = generatedPasswordOne
    passwordTwo.textContent = generatedPasswordTwo
}

function increment() {
    if (passwordLength < 15) {
        passwordLength++
        passwordLengthtext.textContent = "Password Length: " + passwordLength
    }
}

function decrement() {
    if (passwordLength > 5) {
        passwordLength--
        passwordLengthtext.textContent = "Password Length: " + passwordLength
    }

}

function copyPasswordOne() {
    if (passwordOne.textContent) {
        navigator.clipboard.writeText(passwordOne.textContent)
        alert("Password copied!")
    }

}
function copyPasswordTwo() {
    if (passwordTwo.textContent) {
        navigator.clipboard.writeText(passwordTwo.textContent)
        alert("Password copied!")
    }
}

function removeSymbols() {
    characters.splice(62)
    symbols.classList.add("off")
}

function addSymbols() {
    if (symbolsRemoved == true) {
        characters.splice(62, 0, "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
            "/")
        symbols.classList.remove("off")
    }
}

function removeNumbers() {
    characters.splice(52, 10)
    numbers.classList.add("off")
}

function addNumbers() {
    if (numbersRemoved == true) {
        characters.splice(52, 0, "0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
        numbers.classList.remove("off")
    }
}

function toggleSymbols() {
    if (symbolsRemoved == false) {
        removeSymbols()
        symbolsRemoved = true
        console.log(characters)
    }
    else {
        addSymbols()
        symbolsRemoved = false
        console.log(characters)
    }
}

function toggleNumbers() {
    if (numbersRemoved == false) {
        removeNumbers()
        numbersRemoved = true
        console.log(characters)
    }
    else {
        addNumbers()
        numbersRemoved = false
        console.log(characters)
    }

}

