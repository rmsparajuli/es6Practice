let x = 22/7;
// Give Float no as a limit decimal no. after
console.log(x.toFixed(2));

const carry = x.toFixed(3);
console.log(`value of x is ${carry}`);

console.log('Floor Math of carry : '+Math.floor(carry));
console.log('Ceil Math of carry : '+Math.ceil(carry))