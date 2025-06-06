function EmpProfile(name, jobTitle = "Employee") {
  let employee = {
    name: name,
    jobTitle: jobTitle,
  };
  return employee;
}
let employee1 = EmpProfile("Sagar", "Software Developer");
let employee2 = EmpProfile("Manish");

console.log(employee1);
console.log(employee2);