//Introduction of Functions


//---------------Define functions--------------------

//Without return
function addNumber(num1,num2){
	var ans = num1 + num2;
	console.log("Addition "+ans);
}

//calling functions
addNumber(10,5);



//With return

function subNumber(num1,num2){
	//Return the values to where we called the function
	//Exit the function
	return num1 - num2;
}


//calling functions
var sub = subNumber(30,12);
console.log("Substraction "+sub);


//Define

function calculateAge(birthyear){
	return 2022 - birthyear;
}

//calling function

var age = calculateAge(1995);
console.log("My age is "+age+ " Years old");


//DEfine function

function retiringYear(firtstName, birthyear){
	var age1 = calculateAge(birthyear);
	var retire = 60 - age1;
	console.log(firtstName+" retires in "+retire+" years, in "+(birthyear+age1+retire));
}


retiringYear("Semina",1995);



//-----------------Function Expressions------------------

//--function declaration--
//function profession(job,firtstName){}



//function expression
var profession = function(job,firtstName){
	switch(job){
		case 'doctor':
			return firtstName+" is treating patients";
			break;
		case 'softwareEngineer':
			return firtstName+" is codding";
			break;
		case 'teacher':
			return firtstName+" is working with buldings";
			break;
		default:
			return firtstName+" is doing something else.";
	}
}
//calling
console.log(profession('softwareEngineer','Semina'));