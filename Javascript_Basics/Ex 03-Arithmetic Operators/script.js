//Arithmatic Operators


//single operators

var myage,yourage,year,result;

myage = 26;
yourage = 20;
year = 2022;


// Substraction

result = year - myage;
console.log("I was born in "+result);

//Addition

result = year + 10;
console.log("After 10 years,It will be "+result);

//Multiplication

result = myage * yourage;
console.log("Product of our ages " +result);

//Division

console.log('Division of our ages ' +(myage/yourage));


//Modulus

console.log('Modulus of our ages '+(myage%yourage));

//Exponentiation

console.log('Exponentiation of my age '+(myage**2)); //myage*myage

//Increment


//post increment
console.log(myage++);
console.log('Post Increment of myage '+myage);

//pre increment
console.log(++myage);
console.log('Pre Increment of myage '+myage);


//Decrement


//post decrement
console.log(myage--);
console.log('Post decrement of myage '+myage);

//pre decrement
console.log(--myage);
console.log('Pre decrement of myage '+myage);



//Operator Precendence


var cal = (20+30)/10+4.5-2*4**2;

console.log(cal);



//Multiple Operators

var ans1,ans2;
ans1 = ans2 = (((30+40-29)*2)/8)**4;
console.log(ans1);
console.log(ans2);