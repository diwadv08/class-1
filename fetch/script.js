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

const F1=async()=>{
    let url=await fetch('https://jsonplaceholder.typicode.com/photos');
    console.log(await url.json());
}
F1()
