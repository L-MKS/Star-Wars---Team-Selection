var lukeStatus = false;
var vaderStatus = false;
const box1 = document.getElementById("box1"); 
const box2 = document.getElementById("box2");


function lukeSelect () {
    box1.classList.toggle("lightside");
    box1.classList.toggle("lightside2");

    if (vaderStatus == true){
        box2.classList.toggle("darkside");
        box2.classList.toggle("darkside2");
        var vaderStatus = false; 
    }
    
    if (lukeStatus == false){
            var lukeStatus = true;
    } else {
            var lukeStatus = false;
    }
}

function vaderSelect () {
    box2.classList.toggle("darkside");
    box2.classList.toggle("darkside2");
   
    if (lukeStatus == true){
        box1.classList.toggle("lightside");
        box1.classList.toggle("lightside2");
        var lukeStatus = false; 
    }
    
    if(vaderStatus == false){
        var vaderStatus = true;
    } else {
        var vaderStatus = false;
    }
}

box1.addEventListener('click', lukeSelect);
box2.addEventListener('click', vaderSelect);