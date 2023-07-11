const fs = require("fs" );
const users = require("./user2.json");
let user = {
name: "LM",
age: 20,
language: ["Telugu", "English", "Hindi"]
};
let user1 = {
name: "Mic",
age:6,
language: ["Telugu", "MSA", "French"]
};
users.unshift(user);
users.push(user1)
fs.writeFile("user2.json", JSON.stringify(users), err => {
if (err) throw err;
console.log("Done writting");
});