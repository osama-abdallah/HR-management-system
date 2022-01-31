let allEmployees = []

function Employee(employeeId, fullName, department, level) {
  this.employeeId = employeeId;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.salary = 0;
  this.netSalary = 0;
  this.image = `./images/$(employeeId).png`;
  allEmployees.push(this);
}

let department = ["Administration", "Marketing", "Development", "Finance"];
let level = ["Junior", "Mid-Senior", "Senior"];

let employee1000 = new Employee(1000, "Ghazi Samer", department[0], level[2]);
let employee1001 = new Employee(1001, "Lana Ali", department[3], level[2]);
let employee1002 = new Employee(1002, "Tamara Ayoub", department[1], level[2]);
let employee1003 = new Employee(1003, "Safi Walid", department[0], level[1]);
let employee1004 = new Employee(1004, "Omar Zaid", department[2], level[2]);
let employee1005 = new Employee(1005, "Rana Saleh", department[2], level[0]);
let employee1006 = new Employee(1006, "Hadi Ahmad", department[3], level[1]);

Employee.prototype.render = function () {
    document.write(`<p> Employee Full: ${this.fullName} Employee Salary Before Tax: ${this.salary} Employee Net Salary After Tax: ${this.netSalary}  </p>`);
}

Employee.prototype.randomSalary = function (min, max) {
  this.salary = getRndInteger(min, max)
  this.netSalary = this.salary * 0.925
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//  function renderAll (){
for (i = 0; i < allEmployees.length; i++) {
  // allEmployees[i].randomSalary(500,1000);
  // console.log(allEmployees[i]);

  if (allEmployees[i].level == "Junior") {
    allEmployees[i].randomSalary(500, 1000);

  } else if (allEmployees[i].level == "Mid-Senior") {
    allEmployees[i].randomSalary(1000, 1500);

  } else {
    allEmployees[i].randomSalary(1500, 2000);
  }

  console.log(allEmployees[i]);
}

for (i = 0; i < allEmployees.length; i++){
  allEmployees[i].render();
}
//           // allEmployees[i].render
//           console.log(allEmployees[i]);
//         }
    // }
//  allEmployees[i].render();
// renderAll();