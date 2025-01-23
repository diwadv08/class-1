var button=document.querySelectorAll("button");


// button.addEventListener('click',(e)=>{
//     alert(e.target.innerHTML);
// })

function AlertFun(e){
    alert(e.target.innerHTML)
}
button[1].addEventListener('click',()=>{
    alert('Event added to click btn')
    button[0].addEventListener('click',AlertFun)
})
button[2].addEventListener('click',()=>{
    alert('Event Disabled')
    button[0].remoEventListener('click',AlertFun)
})