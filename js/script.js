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
   let submit=document.querySelector("#submit");
   let first_letter=myInput[0];

   let spl_characters=["*","#","@","&","!","^"];
   if(myInput.length>0){
      let array_string=myInput.split("");
      
      
      let num_filter=array_string.filter((e)=>{
         return isFinite(e);
      })
      
      let spl_count=0;
      spl_characters.map((e)=>{
         if(myInput.includes(e)){
            spl_count+=1;
         }
      })
      
      if(spl_count>0){
         error3.style.color='green';
      }
      else{
         error3.style.color='red';
      }
      
      
      if(first_letter==first_letter.toUpperCase()){
         error2.style.color='green';
      }
      else{
         error2.style.color='red';
      }

      if(myInput.length>=10){
       error1.style.color='green';
      }
      else{
       error1.style.color='red';
      }

      if(num_filter.length>0){
         error4.style.color='green';
      }
      else{
         error4.style.color='red';
      }

      

      if(error1.style.color=="green" && error2.style.color=="green" && error3.style.color=="green" && error4.style.color=="green"){
         submit.style.display='inline'
      }  
      else{
         submit.style.display='none'
      }
   }



   
}


