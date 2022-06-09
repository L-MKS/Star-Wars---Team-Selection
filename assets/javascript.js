const box1 = document.getElementById("box1"); 
const box2 = document.getElementById("box2");
const tit1 = document.getElementById("message1"); 
const tit2 = document.getElementById("message2");

const escolha1 = "ESCOLHER LADO DA LUZ";
const escolha2 = "ESCOLHER LADO NEGRO" ;
const luke = "LUKE SELECIONADO";
const vader = "VADER SELECIONADO";

function lukeSelect () {

    if (box1.classList.contains("lightside")){
        box1.classList.remove("lightside");
        box1.classList.add("lightside2");
        tit1.classList.remove("titulo1");
        tit1.classList.add("luke");
        tit1.innerHTML = luke;
    } else {
        box1.classList.remove("lightside2");
        box1.classList.add("lightside");
        tit1.classList.remove("luke");
        tit1.classList.add("titulo1");
        tit1.innerHTML = escolha1;
    }

    if (box2.classList.contains("darkside2")){
        box2.classList.remove("darkside2");
        box2.classList.add("darkside");
        tit2.classList.remove("vader");
        tit2.classList.add("titulo2");
        tit2.innerHTML = escolha2;
    } 
    
}

function vaderSelect () {
    
    if (box2.classList.contains("darkside")){
        box2.classList.remove("darkside");
        box2.classList.add("darkside2");
        tit2.classList.remove("titulo2");
        tit2.classList.add("vader");
        tit2.innerHTML = vader;
    } else {
        box2.classList.remove("darkside2");
        box2.classList.add("darkside");
        tit2.classList.remove("vader");
        tit2.classList.add("titulo2");
        tit2.innerHTML = escolha2;
    }

    if (box1.classList.contains("lightside2")){
        box1.classList.remove("lightside2");
        box1.classList.add("lightside");
        tit1.classList.remove("luke");
        tit1.classList.add("titulo1");
        tit1.innerHTML = escolha1;
    }


}

box1.addEventListener('click', lukeSelect);
box2.addEventListener('click', vaderSelect);