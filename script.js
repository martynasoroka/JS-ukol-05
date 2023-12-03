
let wage = 250
let hours = 21
let days = 7
let tax = 0.15

// hruba mesicni mzda:
const salary = (wage, hours, days) => {
    return Math.round(wage * hours * days)
}

// cista mesicni mzda:
const taxed = (salary, tax) => {
    return salary - salary * tax
}

document.body.innerHTML += `<p> Tvoje hruba mesicni zda to ${salary(wage, hours, days)} Kc a cista  ${taxed(salary(wage, hours, days),tax)} Kc </p>`