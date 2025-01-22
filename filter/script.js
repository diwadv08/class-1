let divTable=document.querySelector(".divTable");
let input=document.querySelector("input");
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
    thead.unshift('S.No')
    thead.map((e)=>{
        table_data+=`<th>${e}</th>`;    
    })

    table_data+='</tr>';
    let s_no=1;
    data.map((e)=>{
        table_data+=`<tr>
                        <td>${s_no++}</td>
                        <td>User-${e.id}</td>
                        <td>${e.name}</td>
                        <td>${e.age}</td>
                        <td>${e.from}</td>
                    </tr>`
    })
    divTable.innerHTML=table_data;
    let table=document.querySelector("table");
    let tcss=document.querySelector(".tcss");
    table.style.width='100%';
    tcss.style.background='#e3e3e3';
    tcss.style.textAlign='left';
    tcss.style.textTransform='uppercase';
}

function Typing(e){
    let myValue=e.target.value;   
    var final_tabledata=data.filter((data)=>{
       if(data.name.toLowerCase().startsWith(myValue.toLowerCase())){
            return data;
       }    
    })
    const thead=Object.keys(data[0]);
    if(final_tabledata.length>0){
        let table_data=`<table cellpadding='20'><tr class='tcss'>`;
        thead.unshift('S.No')
        thead.map((e)=>{
            table_data+=`<th>${e}</th>`;    
        })
        let s_no=1;
        table_data+='</tr>';
        final_tabledata.map((e)=>{
            table_data+=`<tr>
                            <td>${s_no++}</td>
                            <td>User-${e.id}</td>
                            <td>${e.name}</td>
                            <td>${e.age}</td>
                            <td>${e.from}</td>
                        </tr>`
        })        
        divTable.innerHTML=table_data;
        let table=document.querySelector("table");
        let tcss=document.querySelector(".tcss");
        table.style.width='100%';
        tcss.style.background='#e3e3e3';
        tcss.style.textAlign='left';
        tcss.style.textTransform='uppercase';
    }
    else{
        divTable.innerHTML=`<center>No results found for "${myValue}"</center>`;
    }
}

input.addEventListener('keyup',Typing)
window.addEventListener('load',Def);


