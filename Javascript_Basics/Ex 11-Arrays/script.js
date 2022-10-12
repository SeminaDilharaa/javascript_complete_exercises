//Arrays

//Ways to define array
var student = ['Semina','Nuwan','Uchitha','Achala','Mahela'];
var marks = new Array(60, 55, 66, 44, 78);

//Print Array
console.log(student);
console.log(student.length);
console.log(student[3]+' got '+marks[3]+' marks for Maths.');


//Array Mutation

student[3] = 'Kasun';
student[5] = 'Suresh';
student[student.length] = 'Mahesh';
console.log(student);


//Different data types in an array

var std1=['kamal','Perera',23,'Chilaw',true];
console.log(std1);

console.log(typeof(std1[2]));


//Add Elements

std1.push('green');//last add
std1.unshift('Mr');//beging add
console.log(std1);

//Remove Elements

std1.pop();
console.log(std1);

std1.pop();
console.log(std1);

std1.shift();
console.log(std1);


//Get index of an Elemnts
console.log(std1.indexOf(23));

var isAgriStudent = std1.indexOf('Agri') === -1 ? std1[0]+ ' is not a Agri student' : std1[0]+ ' is a Agri student';
console.log(isAgriStudent);


var std2=['Semina','Dilhara',27,'IT','Galle',true];
console.log(std2);

var isITStudent = std2.indexOf('IT') === -1 ? std2[0]+ ' is not a IT student' : std2[0]+ ' is a IT student';
console.log(isITStudent);
