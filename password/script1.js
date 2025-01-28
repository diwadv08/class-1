let inputBox=document.querySelector(".inputBox")
let submitBox=document.querySelector(".submitBox")
let error1=document.querySelector(".error1")
let error2=document.querySelector(".error2")
let error3=document.querySelector(".error3")
let error4=document.querySelector(".error4")

submitBox.style.display='none';

function Typing(){
    let myInput=inputBox.value;
    let inpArray=myInput.split('');
    let spl_array=['!','#','$','&','^','@'];
    let num_count=0;
    let spl_count=0;
    inpArray.filter((e)=>{
       if(isFinite(e)){
         num_count+=1;
       }
    })
    spl_array.filter((e)=>{
        if(inpArray.includes(e)){
            spl_count+=1;
        }
    })


    if(num_count>=1){
        error3.style.color='green'
    }
    else{
        error3.style.color='red'
    }

    if(spl_count>=1){
        error2.style.color='green'
    }
    else{
        error2.style.color='red'
    }


    let first_letter=myInput[0];
    if(myInput.length>=8){
        error4.style.color='green'
    }
    else{
        error4.style.color='red'
    }
    if(first_letter===first_letter.toUpperCase()){
        error1.style.color='green'
    }
    else{
        error1.style.color='red'
    }


    if(error1.style.color=='green' && error2.style.color=='green' && error3.style.color=='green' && error4.style.color=='green'){
        submitBox.style.display='inline';
    }
    else{
        submitBox.style.display='none';
    }
}