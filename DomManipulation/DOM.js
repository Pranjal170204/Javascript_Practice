// DOM -->window object is global object -->in top of heirerchy

//-->document object model
//when html file is converted into sJ object that object is "document"

//tags--->(tokeniser)token--->nodes

//lot of nodes -->DOM tree


//BOM-->Browser object model 

// change HTML using DOM manipulation
//access

document.getElementById('fpara')

document.querySelector('#fpara')  //will return only one object

document.querySelectorAll('.para')

// console.log(a);

//update existing elements
//-->innerHTML
//-->outerHTML
//-->textcontent
//-->innerText


//Add Element
//-->appendchild
//-->createElement
//-->insertadjacentHTML
let newElement=document.createElement("span")
undefined
newElement

newElement.textContent="This is Martian";
'This is Martian'
newElement
{/* <span>​This is Martian​</span>​   */}
mydiv.insertAdjacentElement('beforebegin',newElement)
{/* <span>​This is Martian​</span>​   */}

//Removal element-->removecild

