let btN = document.getElementById(`btn`)
let docElement = document.documentElement.classList

btN.addEventListener(`click`, function() {
    if (docElement.contains(`dark`)) {
        docElement.remove(`dark`)
        btN.innerHTML = `<i class="fa-solid fa-moon"></i>`
    }
    else {
        docElement.add(`dark`)
        btN.innerHTML = `<i class="fa-solid fa-sun" style= "color: yellow"></i>`

    }
})
let userEmailOrPhone = `shoharaf`;
let passWord = `rifat`;
let userEmailPhone = document.getElementById(`userep`.trim().toLowerCase()).value
let Password = document.getElementById(`password`).value

document.getElementById(`login`).addEventListener(`click`,function() {
if (userEmailPhone == userEmailOrPhone && Password == passWord) {
document.getElementById(`right_wrong`).innerText = `You are successfully log in.`
}
else {
    document.getElementById(`right_wrong`).innerHTML = `Your information is wrong`
}
})