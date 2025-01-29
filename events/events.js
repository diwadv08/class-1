let count=1;
const Move=()=>{
    console.log("Mouse moved-"+count++)
}
const Hover=()=>{
    console.log("Mouse moved-"+count++)
}



const Up=(e)=>{
    e.style.background='green';
    e.innerHTML='Mouse Up';
}
const Down=(e)=>{
    e.style.background='blue';
    e.innerHTML='Mouse Downed';
}