// let url=fetch('https://jsonplaceholder.typicode.com/comments');
// url.then((ee)=>{
//     return ee.json()
// }).then((data)=>{
//     console.log(data);
// })

let api_row=document.querySelector(".api_row");
async function Api(){
    let url=await fetch('https://jsonplaceholder.typicode.com/comments');
    let data=await url.json();
    let col_3='';
    let name='';
    data.map((e,i)=>{
        if(e.name.length>19){
            name=e.name.substr(0,18)
        }
        col_3+=`<div class='col-3 mt-4'>
                    <div class='card'>
                        <h5>${e.id}.${name}</h5>
                        <p>${e.email}</p>
                    </div>
                </div>`;
    })
    api_row.innerHTML=col_3;
}
Api()
