var itemlist= document.querySelector("#items");

//parentelement 
console.log(itemlist.parentElement);

//Lastelementchild 
console.log(itemlist.lastElementChild);

//lastchild 
console.log(itemlist.lastChild);

//createchild 
console.log(itemlist.createChild="item5"); 

//firstelementchild 
console.log(itemlist.firstElementChild); 

//firstchild 
console.log(itemlist.firstChild);

//next sibiling 
console.log(itemlist.nextSibling);

//next element sibiling 
console.log(itemlist.nextElementSibling);

//previous sibiling 
console.log(itemlist.previousSibling);

//previous element sibiling 
console.log(itemlist.previousElementSibling);

//create element
var newdiv=document.createElement('div');
newdiv.className="Hello"
newdiv.id="hello"
console.log(newdiv);


//set attribute
newdiv.setAttribute('title',"Hello");
console.log(newdiv);

//create text node
var newtext=document.createTextNode("HELLo");

//append child
newdiv.appendChild(newtext); 

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

container.insertBefore(newdiv,h1); 

var newItem = document.createElement('li');
newItem.textContent = "Hello World";
itemlist.insertBefore(newItem, itemlist.firstElementChild);