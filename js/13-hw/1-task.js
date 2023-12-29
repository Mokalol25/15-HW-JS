const addButton = document.getElementById('add-money');
const getButton = document.getElementById('get-money');
const bankAccont = {
    ownerName: "Nazar",
    accountNumber: 1231231,
    balance: 2000,
    deposit: 1000,
    get: 500,
    addMoneyButton() {
        addButton.addEventListener('click', (event) => {
            clientBalance = clientBalance + clientDeposit
            console.log(clientBalance)
        })
    },
    getMoneyButton() {
        getButton.addEventListener('click', (event) => {
            clientBalance = clientBalance - clientGet
            if (clientBalance <= 0) {
                console.log("На рахунку не має грошей")
            } else {
                console.log(clientBalance)
            }
        })
    },
}

let {ownerName: accountOwnerName, accountNumber: clientNumber, balance: clientBalance, deposit: clientDeposit, get: clientGet} = bankAccont
bankAccont.addMoneyButton()
bankAccont.getMoneyButton()