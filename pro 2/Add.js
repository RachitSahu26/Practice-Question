
const Addbtn=document.querySelectorAll(".add-btn");

const controlBtn=document.querySelectorAll(".conditon-text");
let click=0;
Addbtn.add("click",function(){
    if(click===0){

        controlBtn.innerHtml="Friend";
        controlBtn.style.color="green"
    }
    else{
        controlBtn.innerHtml="Stranger";
        controlBtn.style.color="red"

    }

})