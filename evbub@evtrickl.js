let grand = document.querySelector("#grand")
let parent = document.querySelector("#parent")
let child = document.querySelector("#child")

grand.addEventListener("click",()=>{
    console.log("grand parent is clicked")
    grand.style.backgroundColor="orange"
    

},true)

parent.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("parent is clicked")

    parent.style.backgroundColor="lightblue"

},true)

child.addEventListener("click",()=>{
   
    console.log("child is clicked")

    child.style.backgroundColor="lightgreen"

},true)
