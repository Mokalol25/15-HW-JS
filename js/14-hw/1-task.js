const user = {
    mod: "happy",
    hobby: "skydiving",
    premium: false,
}
// const keys = Object.keys(user)
// console.log(keys)

for (const keys in user) {
    console.log(user[keys])
}