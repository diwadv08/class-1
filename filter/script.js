const data=[
    {
        id:1,
        name:"Harish",
        age:20,
        from:"Trichy"     
    },
    {
        id:2,
        name:"Varun",
        age:21,
        from:"Tanjore"     
    },
    {
        id:3,
        name:"Arun",
        age:18,
        from:"Chennai"     
    },
    {
        id:4,
        name:"Ajay",
        age:10,
        from:"Trichy"     
    },
    {
        id:5,
        name:"Siva",
        age:11,
        from:"Tanjore"     
    },
    {
        id:6,
        name:"Mahesh",
        age:18,
        from:"Chennai"     
    },
];





function Def(){
    const thead=Object.keys(data[0]);
    let table_data=`<table cellpadding='20'><tr class='tcss'>`;
    thead.map((e)=>{
        table_data+=`<th>${e}</th>`;    
    })
    table_data+='</tr>';
    data.map((e)=>{
        table_data+=`<tr>
                        <td>${e.id}</td>
                        <td>${e.name}</td>
                        <td>${e.age}</td>
                        <td>${e.from}</td>
                    </tr>`
    })
    document.body.innerHTML+=table_data;
    let table=document.querySelector("table");
    let tcss=document.querySelector(".tcss");
    table.style.width='100%';
    tcss.style.background='#e3e3e3';
    tcss.style.textAlign='left';
    tcss.style.textTransform='uppercase';
}




window.addEventListener('load',Def);


