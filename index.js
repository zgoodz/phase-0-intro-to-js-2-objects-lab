const employee = {name:'streetAddress'};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmployee = {...employee};
    updateEmployee[key] = value;
    return updateEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}