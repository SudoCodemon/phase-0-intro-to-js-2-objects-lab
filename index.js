// Write your solution in this file!
const employee = {
    name:"Daniel",
    streetAddress:"404 birchtree lane"
}

function updateEmployeeWithKeyAndValue(person, key, value) {
    const newEmployee = {...person}
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(person, key, value) {
    person[key] = value;
    return person;
}

function deleteFromEmployeeByKey(person, key) {
    const newEmployee = {...person}
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(person, key) {
    delete person[key];
    return person;
}