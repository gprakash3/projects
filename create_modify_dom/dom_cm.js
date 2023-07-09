//grabbing by id items.
var itemlists=document.querySelector('#items');
//console.log(itemlists);

// //To get parentNode
// console.log(itemlists.parentNode);
// //we can use it as selector to change property .
 itemlists.parentNode.style.backgroundColor='yellow';

// //we can get parentNode at any level like this
// console.log(itemlists.parentNode.parentNode);
itemlists.parentNode.parentNode.style.color='red';

//parentElement   :- similar to parentNode.  
//if we replace parentNode with parentElement then we will get same result
// console.log(itemlists.parentElement);
// itemlists.parentElement.style.backgroundColor='yellow';
// console.log(itemlists.parentElement.parentElement);

//childNode
console.log(itemlists.childNodes);

//children
console.log(itemlists.children);

//firstchild
 console.log(itemlists.firstChild);

 //firstelementchild
// console.log(itemlists.firstElementChild);
itemlists.firstElementChild.style.color='blue';

//nextsibling and nextElementSibling
console.log(itemlists.nextSibling);
console.log(itemlists.nextElementSibling);

//previouSibling and previousElementSibling
console.log(itemlists.previousSibling);
itemlists.previousElementSibling.style.backgroundColor='indigo';


//create element and insert it
var newdiv=document.createElement('div');
//Adding class to newdiv
newdiv.className='hello';

//Adding id to newdiv
newdiv.id='hello1';

//Adding attribute to newdiv
newdiv.setAttribute('title','Hello div');

//creating textnode
var newdivtext=document.createTextNode('HELLO');
//Add text to newdiv
//newdivtext will be child of newdiv
newdiv.appendChild(newdivtext);
//selecting container class inside header
var container=document.querySelector('header .container');
//selecting header h1
var h1=document.querySelector('header h1');
//inserting newdiv before h1.
container.insertBefore(newdiv,h1);






//inserting HELLO before item list 1
var newdiv1=document.createElement('div');
newdiv1.className='hello';
newdiv1.id='hello1';
newdiv1.setAttribute('title','Hello div');
var newdivtext1=document.createTextNode('HELLO');
newdiv1.appendChild(newdivtext1);
var cont2=document.querySelector('div #main');
 var list1=document.querySelector('div ul');
 cont2.insertBefore(newdiv1, list1);



