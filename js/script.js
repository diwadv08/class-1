// function Change(e){
//    if(e.innerHTML=="Login"){
//         e.innerHTML="Logout";
//         e.style.background='red';
//    }
//    else if(e.innerHTML=="Logout"){
//         e.innerHTML="Login";
//         e.style.background='blue';
//    }
// }




// var pwd=document.querySelector("#pwd");
// function MyFun(e){    
//     if(e.className=='fa fa-eye-slash'){
//         pwd.type="password";
//         e.className='fa fa-eye'
//     }
//     else if(e.className=='fa fa-eye'){
//         pwd.type="text";
//         e.className='fa fa-eye-slash'
//     }
// }

// function SubmitFun(){
//     let name=document.querySelector("#name").value;
//     let pwd=document.querySelector("#pwd").value;
//     let error=document.querySelector("#error");
//     if(name!='admin' || pwd!='123'){
//         error.style.color='red';
//         error.innerHTML='Login Invalid';
//         return false;
//     }
// }


function Typing(e){
   let myInput=e.value;
   let error1=document.querySelector("#error1");
   let error2=document.querySelector("#error2");
   let error3=document.querySelector("#error3");
   let error4=document.querySelector("#error4");
   if(myInput.length>=10){
    error1.style.display='green';
   }
   else{
    error1.style.display='red';
   }
   
}

