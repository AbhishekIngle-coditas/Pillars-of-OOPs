class Employee {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  displayDetails() {
    console.log("Employee Name: " + this.name);
    console.log("Employee ID: " + this.id);
  }
}

class FullTimeEmployee extends Employee {
  constructor(name, id, salary, benefits) {
    super(name, id);
    this.salary = salary;
    this.benefits = benefits;
  }

  calculateSalary() {
    console.log(
      "Salary of Full Time Employee " + this.name + " is: " + this.salary
    );
  }

  displayDetails() {
    super.displayDetails();
    console.log("Employee Type: Full Time");
    console.log("Salary: " + this.salary);
    console.log("Benefits: " + this.benefits);
  }
}

class PartTimeEmployee extends Employee {
  constructor(name, id, hourlyRate, hoursWorked) {
    super(name, id);
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  calculateSalary() {
    let salary = this.hourlyRate * this.hoursWorked;
    console.log("Salary of Part Time Employee " + this.name + " is: " + salary);
  }

  displayDetails() {
    super.displayDetails();
    console.log("Employee Type: Part Time");
    console.log("Hourly Rate: " + this.hourlyRate);
    console.log("Hours Worked: " + this.hoursWorked);
  }
}

let fullTimeEmployee = new FullTimeEmployee(
  "John Doe",
  101,
  50000,
  "Health Insurance"
);
let partTimeEmployee = new PartTimeEmployee("Jane Smith", 102, 20, 40);

fullTimeEmployee.displayDetails();
console.log("------------------------");
partTimeEmployee.displayDetails();

fullTimeEmployee.calculateSalary();
partTimeEmployee.calculateSalary();
