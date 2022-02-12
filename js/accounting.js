'use strict'
let allDepInfo = [];
const parentDiv = document.getElementById("div1");

function getData() {
    let data = localStorage.getItem("employeeInfo");
  
    let parsData = JSON.parse(data);

    return parsData;
}

let empData = getData();

// console.log(empData);

function DepInfo(department, numOfEmployees, totalSalary, averageSalary){
    this.department = department;
    this.numOfEmployees = numOfEmployees;
    this.totalSalary = totalSalary;
    this.averageSalary = averageSalary;
    allDepInfo.push(this);
}

let numAdmin = 0;
let numMarketing =0;
let numDevops=0;
let numFinance=0;

let totalSalaryAdmin = 0, totalSalaryMarketing =0, totalSalaryDevops = 0, totalSalaryFinance = 0;

let averageSalaryAdmin = 0, averageSalaryMarketing =0, averageSalaryDevops = 0, averageSalaryFinance = 0;

for(let i = 0; i<empData.length; i++){
    
    if (empData[i].department == "Administration") {
        
        numAdmin += 1; 
        
        totalSalaryAdmin += empData[i].netSalary;
        

    } else if (empData[i].department == "Marketing") {
  
    numMarketing += 1;

totalSalaryMarketing += empData[i].netSalary;

}else if (empData[i].department == "Development"){
    
    numDevops += 1;
    
totalSalaryDevops += empData[i].netSalary;

}else if (empData[i].department == "Finance") {
    
    numFinance += 1;
    
    totalSalaryFinance += empData[i].netSalary;
    
}

}
averageSalaryAdmin = (totalSalaryAdmin/numAdmin);

averageSalaryMarketing = (totalSalaryMarketing/numMarketing);

averageSalaryDevops = (totalSalaryDevops/numDevops);

averageSalaryFinance = (totalSalaryFinance/numFinance);


let totalNumOfEmployees = numAdmin + numMarketing + numDevops + numFinance,
    totalAllDepSalaries = totalSalaryAdmin + totalSalaryMarketing + totalSalaryDevops + totalSalaryFinance,
    totalAllDepsAvgSalaries = averageSalaryAdmin + averageSalaryMarketing + averageSalaryDevops + averageSalaryFinance;


let Administration = new DepInfo("Administration", numAdmin, totalSalaryAdmin.toFixed(0), averageSalaryAdmin.toFixed(0));

let Marketing = new DepInfo("Marketing", numMarketing, totalSalaryMarketing.toFixed(0), averageSalaryMarketing.toFixed(0));

let Development = new DepInfo("Development", numDevops, totalSalaryDevops.toFixed(0), averageSalaryDevops.toFixed(0));

let Finance = new DepInfo("Finance", numFinance, totalSalaryFinance.toFixed(0), averageSalaryFinance.toFixed(0));

let total = new DepInfo("Total",totalNumOfEmployees, totalAllDepSalaries.toFixed(0), totalAllDepsAvgSalaries.toFixed(0));

let table = document.getElementById("table");

for (let i = 0; i < allDepInfo.length; i++) {
    
    let tr2 = document.createElement("tr");
    table.appendChild(tr2);
    
    let td0 = document.createElement("td");
    td0.textContent = `${allDepInfo[i].department}`;
    tr2.appendChild(td0);

    let td1 = document.createElement("td");
    td1.textContent = `${allDepInfo[i].numOfEmployees}`;
    tr2.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = `${allDepInfo[i].totalSalary}`;
    tr2.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = `${allDepInfo[i].averageSalary}`;
    tr2.appendChild(td3);
}



























//  function render(){

//   let table1 = document.createElement("table");
//     parentDiv.appendChild(table1);




// DepInfo.prototype.render = function (){
    
    // let tr0 = document.getElementById ("tr0");
    
//     // let td1 = document.createElement("td");
//     // td1.textContent = `${this.department}`;
//     // tr0.appendChild(td1);
    

// }

// for (let i = 0; i < allDepInfo.length; i++) {
    
//     allDepInfo[i].render();
//     console.log(allDepInfo[i]);
    
// }



       
    
    
// console.log(allDepInfo);

// let department = ["Administration", "Marketing", "Development", "Finance"];
// let level = ["Junior", "Mid-Senior", "Senior"];

// function Employee(employeeId, fullName, department, level, image) {
//     this.employeeId = employeeId;
//     this.fullName = fullName;
//     this.department = department;
//     this.level = level;
//     this.salary = this.randomSalary1(this.level);
//     this.netSalary = this.salary * 0.925;
//     this.image = image;
//     // Employee.allEmployees.push(this);
//     allEmployees.push(this);
//   }