//--Traversing the DOM

//child nodes
 var itemList = document.querySelector('#li-items');

// //Parent Node -- 
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#afafaf';
// console.log(itemList.parentNode.parentNode);

// //Parent Element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#6f6f6f';
// console.log(itemList.parentElement.parentElement);


//------------------
//child Nodes
// console.log(itemList.childNodes);

// //Children
// console.log(itemList.children);
// console.log(itemList.children[2].textContent);
// itemList.children[2].style.backgroundColor = '#ebca14';


// //--------------------------------------

// //--First Child--
// console.log(itemList.firstChild);

// //First Element Child
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.backgroundColor = '#ebca14';

// //--last Child--
// console.log(itemList.lastChild);


// //Last Element Child
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.style.backgroundColor = '#ebca14';



// //-----------------------

// //--Next Sibling--

// console.log(itemList.nextSibling);

// //--Next Element Sibling--

// console.log(itemList.nextElementSibling);
// itemList.nextElementSibling.style.backgroundColor = 'blue';

// // -- Previous Sibling--
// console.log(itemList.previousSibling);

// //--Previous Element Sibling--

// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.backgroundColor = 'green';





//----------------------------------



//---Create an Element----
//Create an Input

var input = document.createElement('input');


//Add a class


input.className = 'test';

input.id = 'last';

//Add an attribute
input.setAttribute('type', 'text');


//--create div -- 

var newDiv = document.createElement('div');

//Create text node

var newText = document.createTextNode('How are you');

//Add text to div
newDiv.appendChild(newText);
console.log(newDiv);


//--Insert Created elements to the documents

var form = document.querySelector('.frm form');
var button = document.querySelector('.frm form button');

console.log(form);
console.log(button);

input.style.backgroundColor = 'blue';

form.insertBefore(input,button);

