// for(let i=1;i<=3;i++){
//     document.write('*')
// }

// for(let i=10;i<=30;i+=10){
//     document.write(i)
// }

// for(let i=30;i>=10;i-=10){
//     document.write(i)
// }


// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         document.write(i+'-even,')
//     }
//     else{
//         document.write(i+'-odd,')
//     }
// }

// let odd='',even='';
// for(let i=1;i<=20;i++){
//     if(i%2==0){
//       even+=i+',';
//     }   
//     else{
//        odd+=i+',';
//     }
// }
// document.write(odd+'-odd')
// document.write('<br>')
// document.write(even+'-even')


// for(let j=1;j<=3;j++){
//     for(let i=1;i<=3;i++){
//         document.write(i)
//     }
//     document.write('<br>')
// }

// for(let j=1;j<=10;j++){
//     for(let i=j;i<=3;i++){
//         document.write(i)
//     }
//     document.write('<br>')
// }

// for(let i=1;i<=3;i++){
//     document.write(i)
// }

// let i=1;
// while(i<=3){
//     i++;
//     document.write(i)
// }

// let i=1;
// do{
//     i++;
//     document.write(i)
// }while(i<=3)





for(let j=1;j<=10;j++){
    document.write(`<h1>${j+'-table'}</h1>`)
    for(let i=1;i<=25;i++){
        document.write(i+'*'+j+'='+(i*j))
        document.write('<br>')
    }
    document.write('<hr>')
}
