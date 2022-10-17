//Events

// function btnClick(x){
// 	alert(x);
// }


// //--------------------------


// //Event Listner

// var button1 = document.getElementById('c-btn').addEventListener
// ('click', function(){
// 	alert('Button Clicked!');
// })


// //--Named Function---
// document.getElementById('c-btn').addEventListener
// ('mouseout', txtChange);

// function txtChange(){
// 	alert('Mouse Out');
// 	document.getElementById('hdt').textContent = 'Mouse Out!';
// }



// //---Parameterized Function---
// document.getElementById('i-btn').addEventListener
// ('click', function(){
// 	changeListBack("Hello");
// })


// function changeListBack(x){
// 	document.getElementById('li-items').style.backgroundColor = 'green';

// 	document.getElementById('li-items').firstElementChild.textContent = x;
// }


// //---------------------------

// //Event Parameters


// var button2 =document.getElementById('e-btn').addEventListener('click', clickBtn);

// function clickBtn(e){
// 	console.log(e);
// 	console.log(e.target);
// 	console.log(e.target.id);
// 	console.log(e.target.className);
// 	console.log(e.target.classList);
// 	console.log(e.target.type);
// 	console.log(e.type);


// 	//Output
// 	var output = document.getElementById('output');
// 	output.innerHTML = '<h4>Class name : '+e.target.classList[0]+'</h4>';


// 	//Clicking Positions

// 	console.log(e.clientX);
// 	console.log(e.clientY);

// 	console.log(e.offsetX);
// 	console.log(e.offsetY);

// 	//Check key press

// 	console.log(e.altKey);
// 	console.log(e.ctrlKey);
// 	console.log(e.shiftKey);




// }




//---------------------------------------

// -- Bubbling & Capturing--
//Bubbling
document.getElementById('myP1').addEventListener('click',
	function(){
		alert("You clicked the white element!");
	},false);



document.getElementById('myDiv1').addEventListener('click',
	function(){
		alert("You clicked the Orange element!");
	},false);


//Capturing

document.getElementById('myP2').addEventListener('click',
	function(){
		alert("You clicked the white element!");
	},true);



document.getElementById('myDiv2').addEventListener('click',
	function(){
		alert("You clicked the Orange element!");
	},true);

//---------------------------------
//----Remove event Listeners

function myFunc(){
	alert("Button has clicked");
}


//Add
document.getElementById('ev-btn').addEventListener('click',myFunc);


//Remove
document.getElementById('rm-btn').addEventListener('click',function(){
	document.getElementById('ev-btn').removeEventListener('click',myFunc);
	console.log("Event has removed!");
});


//------------------------------------------

//--Diferent Types of Events for mouse --

var btn = document.getElementById('t-btn');
var box = document.getElementById('box');

//btn.addEventListener('click',typeOffEvent1);
//btn.addEventListener('dblclick',typeOffEvent1);
//btn.addEventListener('mousedown',typeOffEvent1);
//btn.addEventListener('mouseup',typeOffEvent1);


//box.addEventListener('mouseenter',typeOffEvent1);
//box.addEventListener('mouseleave',typeOffEvent1);


//box.addEventListener('mouseover',typeOffEvent1);
//box.addEventListener('mouseout',typeOffEvent1);


box.addEventListener('mousemove',typeOffEvent1);



function typeOffEvent1(e){
	console.log("Event Type: "+e.type);

	document.querySelector('#box h2').textContent = 'Mouse X : '+e.offsetX+'  | Mouse Y '+e.offsetY;

	document.body.style.backgroundColor = 'rgb('+e.offsetX+','+e.offsetY+','+e.offsetX+')';
}



//--Different types of events for Keybord--


var keyInput = document.querySelector('input[type="text"]');

//keyInput.addEventListener('keydown',typeOffEvent2);

//keyInput.addEventListener('keyup',typeOffEvent2);

//keyInput.addEventListener('keypress',typeOffEvent2);

// keyInput.addEventListener('focus',typeOffEvent2);

// keyInput.addEventListener('blur',typeOffEvent2);

//keyInput.addEventListener('copy',typeOffEvent2);

//keyInput.addEventListener('cut',typeOffEvent2);


//keyInput.addEventListener('paste',typeOffEvent2);

//keyInput.addEventListener('input',typeOffEvent2);


// function typeOffEvent2(e){
// 	console.log("Event Type: "+e.type);
// 	//console.log('Value : '+e.target.value);
// 	//document.getElementById('out').textContent = e.target.value;

// }


// --Other Diferent types of events

//Select
var select = document.querySelector('select');


//select.addEventListener('change', typeOffEvent3);
select.addEventListener('input', typeOffEvent3);

function typeOffEvent3(e){
	console.log("Event Type: "+e.type);
	console.log("Value: "+e.target.value);


}


//Form

var form = document.querySelector('form');

form.addEventListener('submit',typeOffEvent4);

function typeOffEvent4(e){
	e.preventDefault();
	console.log("Event type : "+e.type);
}