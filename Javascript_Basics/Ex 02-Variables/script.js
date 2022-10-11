//Variables


var firstname = "Semina";  //no need datatype
var lastname = "Dilhara";
var age = 26;
var isok = true;
var job, height;


//print varibale

console.log(firstname);  // Semina
console.log(lastname);  // Dilhara

console.log("My name is " + firstname+" "+lastname)  // My name is Semina Dilhara 

//type coercion
console.log("My Age is "+age);  //  My Age is 26

//boolean

console.log("It is "+isok);   //  It is true

console.log("I'm a "+job);  //  I'm a undefined


//Get varibale type

console.log(typeof(firstname));  //string
console.log(typeof(lastname));  //string
console.log(typeof(age));  //number
console.log(typeof(isok));  //boolean
console.log(typeof(job));  //undefined



//Define

job = 'Software Engineer'

//Variable Mutation

lastname = "Dilhara Gamage"


console.log("My name is "+lastname+" I am a "+job);  //  My name is Dilhara Gamage I am a Software Engineer

//Display an alert

alert("My name is "+firstname+" "+lastname+" I am "+age+" years old "+" I am "+job);


//Get user Input

height = prompt("What is your height");
alert("My height is "+height+" feets");
