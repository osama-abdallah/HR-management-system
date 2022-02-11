let cards = document.getElementById("cards");
let employeeForm = document.getElementById("form");

// let profileCards =  document.getElementById("profile");

let department = ["Administration", "Marketing", "Development", "Finance"];
let level = ["Junior", "Mid-Senior", "Senior"];


let allEmployees = [];
// Employee.allEmployees = []; 
function Employee(employeeId, fullName, department, level, image) {
  this.employeeId = employeeId;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.salary = 0;
  this.netSalary = 0;
  this.image = image;
  // Employee.allEmployees.push(this);
  allEmployees.push(this);
}


let employee1000 = new Employee(1000, "Ghazi Samer", department[0], level[2], "https://github.com/LTUC/prep-course-std/blob/master/Day08/Task/assets/Ghazi.jpg?raw=true");
let employee1001 = new Employee(1001, "Lana Ali", department[3], level[2], "https://github.com/LTUC/prep-course-std/blob/master/Day08/Task/assets/Lana.jpg?raw=true");
let employee1002 = new Employee(1002, "Tamara Ayoub", department[1], level[2], "https://github.com/LTUC/prep-course-std/blob/master/Day08/Task/assets/Tamara.jpg?raw=true");
let employee1003 = new Employee(1003, "Safi Walid", department[0], level[1], "https://github.com/LTUC/prep-course-std/blob/master/Day08/Task/assets/Safi.jpg?raw=true");
let employee1004 = new Employee(1004, "Omar Zaid", department[2], level[2], "https://github.com/LTUC/prep-course-std/blob/master/Day08/Task/assets/Omar.jpg?raw=true");
let employee1005 = new Employee(1005, "Rana Saleh", department[2], level[0], "https://github.com/LTUC/prep-course-std/blob/master/Day08/Task/assets/Rana.jpg?raw=true");
let employee1006 = new Employee(1006, "Hadi Ahmad", department[3], level[1], "https://github.com/LTUC/prep-course-std/blob/master/Day08/Task/assets/Hadi.jpg?raw=true");




Employee.prototype.render = function () {
  
  let card = document.createElement("div");
  cards.appendChild(card);
  
    // card.style.display = "flex";
    card.style.maxWidth = "300px";
card.style.border = "thick solid #0000FF";
card.style.margin = "10px";
card.style.textAlign = "center"
card.style.border = "10px";
card.style.backgroundColor = "#fff";
card.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
card.style.borderRadius = "5px";

  let image = document.createElement('img');
  image.setAttribute("src", this.image);
  card.appendChild(image);

  image.style.width = "150px";
  image.style.height = '150px';

let par = document.createElement("p");
card.appendChild(par);
par.textContent= `EmployeeID: ${this.employeeId} - Full name: ${this.fullName} \n - Department: ${this.department} - Level: ${this.level} - ${randomNumber()}`;


  // let ul = document.createElement("ul");
  // cards.appendChild(ul);

  // let li0 = document.createElement("li");
  // li0.textContent = `EmployeeID: ${this.employeeId}`;
  // ul.appendChild(li0);

  // let li1 = document.createElement("li");
  // li1.textContent = `Full name: ${this.fullName}`;
  // ul.appendChild(li1);

  // let li2 = document.createElement("li");
  // li2.textContent = `Department: ${this.department}`;
  // ul.appendChild(li2);

  // let li3 = document.createElement("li");
  // li3.textContent = `Level: ${this.level}`;
  // ul.appendChild(li3);

  // let li4 = document.createElement("li");
  // li4.textContent = `Salary: ${this.salary}`;
  // ul.appendChild(li4);

  // let li5 = document.createElement("li");
  // li5.textContent = `Net Salary: ${this.netSalary}`;
  // ul.appendChild(li5);

};

Employee.prototype.randomSalary = function (min, max) {
  this.salary = getRndInteger(min, max)
  this.netSalary = this.salary * 0.925
}

function randomNumber() {
  let value = Math.floor(1000 + Math.random() * 9000);

  return value;
}
// console.log(randomNumber());


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

for (i = 0; i < allEmployees.length; i++) {
  allEmployees[i].render();
}
//           // allEmployees[i].render
//           console.log(allEmployees[i]);
//         }
    // }
//  allEmployees[i].render();
// renderAll();
function handleSubmit(event){

  event.preventDefault();

  let fullName = event.target.fullName.value;

  let department = event.target.department.value;

  let level = event.target.level.value;

  let image = event.target.images.value;

  let newEmployee = new Employee(randomNumber(), fullName, department, level, image);
//  console.log(fullName, department,level, image);
// console.log(newEmployee.employeeId);

newEmployee.render();
}

employeeForm.addEventListener("submit",handleSubmit); //first inside the brackets is the type