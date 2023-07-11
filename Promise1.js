const event = new Promise((resolve, reject) => {
   var name = "Yamini";
   if (name == "Sunitha") {
       resolve(name);
} else {
reject("Name was not Sunitha,name was " + name);
}
});

event.then((name) => {
console.log(name);
})
event.catch((err) => {
console.log(err);
});

