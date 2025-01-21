// let url=fetch('https://jsonplaceholder.typicode.com/photos');

// url.then(function(hh){
//    return (hh.json());
// }).then(function(rr){
//     console.log(rr);
// }).catch((e)=>{
//     console.log("Error!");
// }).finally(()=>{
//     console.log("Works!!!");
// })



// async function F1(){
//     let url=await fetch('https://jsonplaceholder.typicode.com/photos');
//     console.log(await url.json());
// }
// F1()
const api_div=document.querySelector(".api_div");
const F1=async()=>{
    let url=await fetch('https://jsonplaceholder.typicode.com/photos');
    let data=await url.json();
    let div_data='';
    data.map((e,i)=>{
        div_data+=`<div class="col-lg-4 my-2 col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <h1 class='text-center'>${e.id}</h1>
                            <p>${e.title}</p>
                        </div>
                    </div>
                </div> `
    })
    api_div.innerHTML=div_data;
}
F1()
