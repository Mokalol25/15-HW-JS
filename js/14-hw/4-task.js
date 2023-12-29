const employees = {
    Joe: 20000,
    Karol: 30000,
    Steve: 25000,
}
function countTotalSalary(employees) {
    // const salaryCheck = Object.values(employees)
    // const totalSalary = salaryCheck.reduce((acc, salary) =>
    //     acc + salary, 0
    // )
    let totalSalary = 0;
    for (let employee in employees) {
        totalSalary += employees[employee]
    }
    return totalSalary
}
const totalSalary = countTotalSalary(employees)
console.log(totalSalary)