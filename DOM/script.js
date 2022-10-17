// -------------------------------------------
// -------Select & Update DOM Elements--------
// -------------------------------------------

// ---Examine the document object---
console.dir(document);

// --Get Properties--
// console.log(document.URL);
// console.log(document.charset);
// console.log(document.lastModified);
// console.log(document.title);
// console.log(document.doctype);

// console.log(document.head);
// console.log(document.body);

// console.log(document.all);
// console.log(document.all[11]);

// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// // --Change values--
// document.title = "Document Object Model";
// console.log(document.title);

// // --Not the best way--
// document.all[11].textContent = "Shopping Item List"
// console.log(document.all[16]);

// -----------------------------------

// ---Select elements using ID---
console.log(document.getElementById('frmt'));

var formTitle = document.getElementById('frmt');
console.log(formTitle);


// //-- textContent, InnerText & innerHTML
// formTitle.textContent = 'Add Shopping Items';
// console.log(formTitle.textContent);

// formTitle.innerText = 'Add Your Shopping Items';
// console.log(formTitle.innerText);

// formTitle.innerHTML = '<i>Hello </i>Add Items';
// console.log(formTitle.innerHTML);

// //---Styling--

// var navigation = document.getElementById('navbar');
// navigation.style.backgroundColor = 'blue';

// navigation.style.color = '#fff';

//------------------------------------------


//---Select elements using class name

// var items = document.getElementsByClassName('items');
// console.log(items);
// console.log(items[2]);

// items[2].textContent = 'Hand Bag';
// items[0].textContent = 'Frock';

// console.log(items[0]);
// console.log(items[2]);

// // --- Styling--
// items[2].style.fontFamily = 'serif';
// items[2].style.backgroundColor = 'blue';

// //--change back ground color of all the list items;

// for(var i of items){
//     i.style.backgroundColor = 'blue';
// }


//  -----Select elements using tag name ---

// var lim = document.getElementsByTagName('li');
// console.log(lim);

// console.log(lim[2]);

// lim[2].textContent = 'Book';
// console.log(lim[2]);


// // --- Styling ---

// lim[2].style.color = '#fff';
// lim[2].style.backgroundColor = 'blue';

// //-- Change back color of all the list items

// for(var i of lim){
//     i.style.backgroundColor = 'blue';
// }


// -------------------------------------------------

//Query Selector

//ID

// var hd = document.querySelector('#navbar');
// hd.style.border = 'solid 3px #000';

// //Tag

// var input = document.querySelector('input');
// input.style.backgroundColor = '#ebca14';
// input.value='Paint Bucket';

// var input = document.querySelector('option');
// input.style.backgroundColor = '#ebca14';
// input.value='Paint Bucket';


// //Class -----

// var item = document.querySelector('.items');
// item.style.backgroundColor = '#ebca14';

// //--Mix Selectors--

// var item1 = document.querySelector('div .frm #frmt'); 
// item1.style.color = 'red';
// console.log(item1);


//---------------------Selects element using Query Selector All-------------------


//--ID--

var hd = document.querySelectorAll('#hdt');
console.log(hd);

//Tag
var dv = document.querySelectorAll('div');
console.log(dv);

//Class
var cl = document.querySelectorAll('.items');
console.log(cl);

//Mix
var mx = document.querySelectorAll('div .list li');
console.log(mx);


//--pseudo classes

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

console.log(odd);
console.log(even);

for(var i of odd){
    i.style.backgroundColor = '#ebca14';
}

for(var i of even){
    i.style.backgroundColor = '#1422eb';
}

