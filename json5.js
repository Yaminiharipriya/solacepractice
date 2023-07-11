const fs = require("fs" );
const users = require("./employee.json");
let user = {
fname: "Meghana",
lname: "Guthula",
age: 24,
emp_id: 678
};
let user1 = {
fname: "Priya",
lname: "Gunturi",
age: 25,
emp_id: 789
};
users.unshift(user);
users.push(user1)
fs.writeFile("employee.json", JSON.stringify(users), err => {
if (err) throw err;
console.log("Good Day");
});