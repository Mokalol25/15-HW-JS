const user = {
    name: 'Marko',
    email: '1234@gmail.com',
    password: 1234,
    emailCheck() {
        const checkEmail = prompt("Введіть email:")
    if (checkEmail === userEmail) {
        alert("Правильно")
    } else {
        alert("error")
    }
    },
    passwordCheck() {
        const checkPassword = Number(prompt("Введіть password:"))
    if (checkPassword === userPassword) {
    alert("Правильно")
} else {
    alert("error")
}
    }
}
const {name: userName, email: userEmail, password: userPassword} = user
user.emailCheck()
user.passwordCheck()