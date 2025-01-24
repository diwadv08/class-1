function setActive(e){
    let alreadyActive=document.querySelector(".tabs .active");
    let content=document.querySelectorAll(".content");
    let alreadyActiveDiv=document.querySelector(".container .activeDiv");    
    alreadyActive.className='';
    alreadyActiveDiv.className='row content';
    content[e.id].className='row content activeDiv'
    e.className='active';
}


