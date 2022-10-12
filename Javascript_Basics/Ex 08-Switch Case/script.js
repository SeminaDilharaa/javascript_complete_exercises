//Switch Case


var empName = "Kasun";
var jobRole = "Doctor";


switch(jobRole.toLocaleLowerCase()){
	case 'teacher':
		console.log(empName+"  Is a teacher");
		break;

	case 'doctor' :
		console.log(empName+"  Is a doctor");
		break;

	case 'engineer' :
		console.log(empName+"  Is a engineer");
		break;

	default:
		console.log(empName+" is a Unemployee or does something else");
		break;
}


//---

var age = 30;
switch(true){
	case age < 20:
		console.log(empName+' is under age');
		break;

	case age >= 20 && age <30:
		console.log(empName+' is in perfect age');
		break;

	case age >= 30 && age < 50:
		console.log(empName+' is mature');
		break;

	default:
		console.log(empName+' is too old');
}