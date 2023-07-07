console.log("hello world!");
var items=document.getElementsByClassName("list-group-item");
//console.log(items[2]);
items[2].style.backgroundColor="green"
for(let i=0; i<=items.length-1 ; i++){
    items[i].style.fontWeight='bold'
}

console.log(document.getElementsByClassName("list-group-item"))
var tag_of_items=document.getElementsByTagName("li") ;
console.log(tag_of_items);
for (let i=0;i<=tag_of_items.length-1;i++){
    tag_of_items[i].style.fontSize='30px' 
    tag_of_items[i].style.color="orange"
}