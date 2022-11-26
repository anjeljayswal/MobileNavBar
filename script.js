const contents=document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx) => {
    item.addEventListener('click',()=>{
        console.log("click");
        hideallcontents()
        hideallItems()
        item.classList.add('active')
        contents[idx].classList.add('show')
    })
});

function hideallcontents(){
    
    contents.forEach(content=>content.classList.remove('show'))
}
function hideallItems(){
    listItems.forEach(item =>item.classList.remove('active'))
}
















// var obj ={
//     name : "anjali"
// }

// map?
// polyfill? 
//function fn(){

// }

//{1,2,3,4,5}.map((element, index)=> element+2)

// Array.prototype.newMap = function(fn){
//     console.log(this)
//     console.log(fn)
// }

// var arr1 = [1,2,3,4,5,6]
// arr1.newMap((element, index) = element*2)