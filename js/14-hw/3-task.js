const employees = {
    Joe: 10,
    Karol: 20,
    Steve: 15,
}
const employeesCheck = Object.values(employees)
const findBestEmployee = Math.max(...employeesCheck)
console.log(findBestEmployee)