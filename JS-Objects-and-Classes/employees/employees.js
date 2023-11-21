// *** Employees ***
// You're tasked to create a list of employees and their personal numbers.
// You will receive an array of strings. Each string is an employee name and to assign them a personal number you have to find the length of the name (whitespace included). 
// Try to use an object.
// At the end print all the list employees in the following format:
//  "Name: {employeeName} -- Personal Number: {personalNum}" 


function assignEmployees(namesArray) {
    const employeesList = [];
    
    class Employee {
        constructor (name) {
            this.name= name;
            this.personalNumber = name.length;
        }
    }

    for (const name of namesArray) {
        let personalNumber = name.length;
        let employeeObject = new Employee(name, personalNumber)
        employeesList.push(employeeObject)
    }
    
    employeesList.forEach((employee) => console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`))
}


assignEmployees(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal'])