let span=document.getElementById("number");
let num=Number(span.innerHTML);


// function Minus(){
//     if(num>0){
//         num-=1;
//         span.innerHTML=num;
//     }
// }
// function Plus(){
//     if(num<10){
//         num+=1;
//         span.innerHTML=num;
//     }
// }

function inc(){
    if(num<500){
        num+=1;
        span.innerHTML=num;
    }
   
}

setInterval(inc,0)