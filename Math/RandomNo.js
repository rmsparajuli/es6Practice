let upper = 55;
let lower = 20;

let total = (Math.random() * (upper - lower))
console.log(` True Total no. is : ${total} `)
// console.log(` Convert into int. ${parseInt(total)} `);       // Same as below just a little bit difference.

console.log(` Convert into int. ${Math.floor(total)} `);