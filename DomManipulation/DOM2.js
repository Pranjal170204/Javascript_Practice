let mydiv=document.querySelector("#mydiv ")
let newElement=document.createElement('span')
newElement.textContent="Martian Loves"

mydiv.insertAdjacentElement('beforebegin',newElement)//beforebegin 

let parent=document.querySelector("#mydiv ")
let child=document.getElementById("fpara")
// parent.removeChild(child) -->remove element


