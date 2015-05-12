var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerrard',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerrard',
        phone: '0011335544',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Gerrard',
        phone: '0123456789',
        salary: 4500
    }
];

function showList() {
    var myTable = '<table class = "table table-bordered" = "1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>View</th><th>Delete</th></tr>';
    for (var i = 0; i < employeesList.length; i++) {
        myTable += '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>' + employeesList[i].phone + '</td><td>' + employeesList[i].salary +
            '<td><button type = "button" onclick = "view(' + i + ')">view</button></td>' +
            '<td><button type = "button" onclick = "del(' + i + ')">delete</button></td></tr>';
    }
    myTable += '<tr><td>' + firstNameMostOften() + '</td><td>' + numberUniquesLastNames() + '</td><td>'+ frequencyDigits() +'</td><td>' + averageSalary() + '</td></tr>';
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
};

function addEmployee() {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = parseFloat(document.getElementById("salary").value);
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
}

function salaryTotal() {
    var sum = 0;
    for (var i in employeesList) {
        sum += employeesList[i].salary;
    }
    var mySalary = '<p>' + sum + '</p>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = mySalary;
    return sum;
}

function deleteEmployee() {
    employeesList.pop();
    showList();
}


function view(i) {
    alert(employeesList[i].firstName + ' ' + employeesList[i].lastName + '\n' + employeesList[i].phone + '\n' + employeesList[i].salary);
}

function del(i) {
    employeesList.splice(i, 1);
    showList();
}

function firstNameMostOften() {

    var max = 0;
    var firstName = undefined;
    var counter = 0;
    for (var i = 0; i < employeesList.length; i++) {
        counter = 0;
        max = 0;
        for (var j = 0; j < employeesList.length; j++) {
            if (employeesList[i].firstName == employeesList[i].firstName) {
                counter++;
            }
        }
        if (counter > max) {
            max = counter;
            firstName = employeesList[i].firstName;
        }
    }
    return firstName;
}

function averageSalary() {
    var salaryAll = salaryTotal();
    return salaryAll / employeesList.length;
}

function numberUniquesLastNames() {
    var uniqueLastNames = [];
    for(var i = 0; i < employeesList.length; i++) {
        var bool = true;
        for(var j = 0; j < uniqueLastNames.length; j++) {
            if (employeesList[i].lastName == uniqueLastNames[j]) {
                bool = false;
            }
        }
        if (bool == true) {
            uniqueLastNames.push(employeesList[i].lastName);
        }
    }
    return uniqueLastNames.length;
}

function frequencyDigits() {
    var counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var cifra;
    for(var i = 0; i < employeesList.length; i++) {
        var phone = employeesList[i].phone;
        var phoneLength = phone.length;
        for (j = 0; j < phoneLength; j++) {
            cifra = phone[j];
            counter[parseInt(cifra)]++;
        }
    }
    for(i = 0; i < 9; i++) {
        for(j = i + 1; j <= 9; j++) {
            if(counter[i] < counter[j]) {
                var aux = counter[i];
                counter[i] = counter[j];
                counter[j] = aux;
                aux = digits[i];
                digits[i] = digits[j];
                digits[j] = aux;
            }
        }
    }

    var firstDigits = '';
    for(i = 0; i < 5; i++) {
        if(i > 0) {
            firstDigits += ',';
        }
        firstDigits += digits[i];
    }
    return firstDigits;
}
