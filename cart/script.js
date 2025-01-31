let cart_data=document.querySelector(".cart_data");
let cart_count=document.querySelector(".cart_count");
let modal_body=document.querySelector(".modal-body");


let cart_content=[
    {
        id:1,
        img:'0.jpg',
        name:'Data-1',
        ratings:'4.1',
        description:'Lorem ipsum dolor sit amet, consect',
        price:250,
        old_price:400,
        added_cart:0,
    },
    {
        id:2,
        img:'1.jpg',
        name:'Data-2',
        ratings:'2.1',
        description:'Lorem ipsum dolor sit amet, consect',
        price:550,
        old_price:700,
        added_cart:0,
    },
    {
        id:3,
        img:'2.jpg',
        name:'Data-3',
        ratings:'1',
        description:'Lorem ipsum dolor sit amet, consect',
        price:1250,
        old_price:1400,
        added_cart:0,
    },
    {
        id:4,
        img:'3.jpg',
        name:'Data-4',
        ratings:'3.1',
        description:'Lorem ipsum dolor sit amet, consect',
        price:550,
        old_price:700,
        added_cart:1,
    },


    {
        id:5,
        img:'4.jpg',
        name:'Data-5',
        ratings:'1.1',
        description:'Lorem ipsum dolor sit amet, consect',
        price:1200,
        old_price:1400,
        added_cart:0,
    },
    {
        id:6,
        img:'5.jpg',
        name:'Data-6',
        ratings:'5',
        description:'Lorem ipsum dolor sit amet, consect',
        price:1550,
        old_price:1700,
        added_cart:0,
    },
    {
        id:7,
        img:'6.jpg',
        name:'Data-7',
        ratings:'2',
        description:'Lorem ipsum dolor sit amet, consect',
        price:400,
        old_price:500,
        added_cart:0,
    },
    {
        id:8,
        img:'7.jpg',
        name:'Data-8',
        ratings:'1.1',
        description:'Lorem ipsum dolor sit amet, consect',
        price:1550,
        old_price:1700,
        added_cart:0,
    },


    {
        id:9,
        img:'8.jpg',
        name:'Data-9',
        ratings:'2.1',
        description:'Lorem ipsum dolor sit amet, consect',
        price:1250,
        old_price:1400,
        added_cart:0,
    },
    {
        id:10,
        img:'9.jpg',
        name:'Data-10',
        ratings:'4.1',
        description:'Lorem ipsum dolor sit amet, consect',
        price:1550,
        old_price:1700,
        added_cart:0,
    },
    {
        id:11,
        img:'10.jpg',
        name:'Data-11',
        ratings:'4',
        description:'Lorem ipsum dolor sit amet, consect',
        price:150,
        old_price:400,
        added_cart:0,
    },
    {
        id:12,
        img:'11.jpg',
        name:'Data-12',
        ratings:'3.1',
        description:'Lorem ipsum dolor sit amet, consect',
        price:550,
        old_price:700,
        added_cart:0,
    },

    {
        id:13,
        img:'12.jpg',
        name:'Data-13',
        ratings:'4.1',
        description:'Lorem ipsum dolor sit amet, consect',
        price:250,
        old_price:400,
        added_cart:0,
    },
    {
        id:14,
        img:'13.jpg',
        name:'Data-14',
        ratings:'2.1',
        description:'Lorem ipsum dolor sit amet, consect',
        price:550,
        old_price:700,
        added_cart:1,
    },
    {
        id:15,
        img:'14.jpg',
        name:'Data-15',
        ratings:'1',
        description:'Lorem ipsum dolor sit amet, consect',
        price:1250,
        old_price:1400,
        added_cart:0,
    },
    {
        id:16,
        img:'15.jpg',
        name:'Data-16',
        ratings:'3.1',
        description:'Lorem ipsum dolor sit amet, consect',
        price:550,
        old_price:700,
        added_cart:0,
    },
]


let cart_items=cart_content.filter((e)=>{
    if(e.added_cart!=0){
        return e;
    }
})
cart_count.innerHTML=cart_items.length;

let datas='';
cart_content.map((e)=>{
    let bg='dark';
    let btnCss={
        bg:'dark',
        text:'Add to cart'
    }

    if(e.added_cart==0){
        btnCss
    }
    else{
        btnCss.bg='success';
        btnCss.text='Added';
    }
    if(e.ratings>=1 && e.ratings<=2){
        bg='danger';
    }
    else if(e.ratings>=2 && e.ratings<=4){
        bg='warning';
    }
    else if(e.ratings>=4 && e.ratings<=5){
        bg='success';
    }



    datas+=`<div class="col-lg-4 col-md-6 mb-3">
                    <div class="card">
                        <img src="images/${e.img}" alt="" height='200px'>
                        <div class="card-body">
                            <h4>${e.name} <span class="badge bg-${bg} py-1">${e.ratings} <i class="fa fa-star"></i></span></h4>
                            <h6>Rs.${e.price} <s class="text-secondary">Rs.${e.old_price} </s></h6>
                            <p>${e.description}</p>
                            <button class="btn btn-${btnCss.bg} w-100">${btnCss.text}</button>
                        </div>
                    </div>
                </div>`
})


let table_row='';
cart_items.map((e,i)=>{
   table_row+=`<tr>
                <td>${i+1}.</td>
                <td><img src="images/${e.img}" alt="" height="30px"></td>
                <td>${e.name}</td>
                <td>Rs.${e.price}</td>
                <td><i class="fa fa-trash"></i></td>
            </tr>`
    
})

let cart_Datas=`<table class="table">
                        <tr class="bg-danger text-light">
                            <th>S.No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        ${table_row}
                        <tr>
                            <td colspan="5" align="right">
                                <b>Grand Total: Rs.700</b>
                            </td>
                        </tr>
                    </table>`
modal_body.innerHTML=cart_Datas;
                


cart_data.innerHTML=datas;