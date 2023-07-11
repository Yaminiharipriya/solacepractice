const csqr=(a)=>{
return new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve(a*a);
},2000)
});
}
async function shoeres(){
let res= await csqr(2);
console.log(res);
let res1=await csqr(res);
console.log(res1);
let res2=await csqr(res1);
console.log(res2);
}
shoeres();
