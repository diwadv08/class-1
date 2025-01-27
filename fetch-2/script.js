// let url=fetch('https://jsonplaceholder.typicode.com/comments');
// url.then((ee)=>{
//     return ee.json()
// }).then((data)=>{
//     console.log(data);
// })


async function Api(){
    let url=await fetch('https://jsonplaceholder.typicode.com/comments');
    console.log(await url.json());
}
Api()
