function changeText(){
    let para=document.getElementById('fpara')
    
    para.textContent="hello Bruhhhh!!!";
}
let para=document.getElementById('fpara')  


para.addEventListener('click',changeText);
para.removeEventListener('click',changeText)

//phases of event 
//->capturing Phase
//->at-target
//->Bubbling Phase

// addEventListener -->by default-->Bubbling phase
// for capturing phase-->set True

//Event Object
// listner function gets event 

//Default action
//anchor tag-->preventing default action


//avoiding too many listners
// event.target can be used
//.nodeName, .textcontent

// Dynamically script added by DOMContentLoaded: 

document.addEventListener("DOMContentLoaded", function() {
    const script = document.createElement('script');
    script.src = "JS file";
    script.async = true; 
    
    document.body.appendChild(script);

    console.log('Script from code help added dynamically after DOM is loaded.');
});


