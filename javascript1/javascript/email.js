function generateEmail(name, department, date) {
  let email = `Dear ${name},
Welcome to the ${department} team! Your joining date is ${date}.`;
  return email;
}

let email = generateEmail("Divya", "Cognizant", "May 14, 2025");
console.log(email);