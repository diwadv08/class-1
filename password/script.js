let input=document.createElement('input');
let i=document.createElement('i');
input.setAttribute('type','password');
i.setAttribute('class','fa fa-eye-slash');
i.setAttribute('onclick','myFun()');
i.style.position='relative';
i.style.left='-20px';
i.style.fontSize='13px';

document.body.appendChild(input);
document.body.appendChild(i);
function myFun(){
    if(i.className.includes('slash')){
        i.setAttribute('class','fa fa-eye');
        input.setAttribute('type','text');
    }
    else{
        i.setAttribute('class','fa fa-eye-slash');
        input.setAttribute('type','password');
    }
}