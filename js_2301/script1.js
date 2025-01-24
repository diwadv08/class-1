let bgClass='';
let nav_links=['Home','About','Contact','Email','Support','Location'];
let nav_AnchorTag='';
let crs_data=[
  {
    img_name:'images/1.jpg',
    title:'Title-1',
    description:'Description-1'
  },
  {
    img_name:'images/2.jpg',
    title:'Title-2',
    description:'Description-2'
  },
  {
    img_name:'images/3.jpg',
    title:'Title-3',
    description:'Description-3'
  },
  {
    img_name:'images/4.jpg',
    title:'Title-4',
    description:'Description-4'
  },
  {
    img_name:'images/5.jpg',
    title:'Title-5',
    description:'Description-5'
  },
  {
    img_name:'images/5.jpg',
    title:'Title-5',
    description:'Description-5'
  },
  {
    img_name:'images/5.jpg',
    title:'Title-5',
    description:'Description-5'
  },
  {
    img_name:'images/5.jpg',
    title:'Title-5',
    description:'Description-5'
  },
  {
    img_name:'images/5.jpg',
    title:'Title-5',
    description:'Description-5'
  },
]

let crs_div='',bottom_nav='';
crs_data.map((e,i)=>{
  if(i==0){
    bottom_nav+=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" class="active" aria-current="true" aria-label="Slide 1"></button>`
    crs_div+=`<div class="carousel-item active">
    <img src="${e.img_name}" class="d-block w-100" alt="..." height='580px'>
    <div class="carousel-caption d-none d-md-block">
      <h5>${e.title}</h5>
      <p>${e.description}</p>
    </div>
  </div>`;
  }
  else{
     bottom_nav+=`<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" aria-current="true" aria-label="Slide 1"></button>`
    crs_div+=`<div class="carousel-item">
                  <img src="${e.img_name}" class="d-block w-100" alt="..." height='580px'>
                  <div class="carousel-caption d-none d-md-block">
                    <h5>${e.title}</h5>
                    <p>${e.description}</p>
                  </div>
                </div>`;
  }
  
  
})
nav_links.map((e,i)=>{
  if(i==0){
    nav_AnchorTag+=` <a class="nav-link active" href="#" onclick='setActiveClass(this)'>${e}</a>`;
  }
  else{
    nav_AnchorTag+=`<a class="nav-link" href="#" onclick='setActiveClass(this)'>${e}</a>`;
  }
})


      function LoadFn(){
        let header=`<nav class="navbar navbar-expand-lg navbar-dark ${bgClass} fixed-top py-3">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <div class="navbar-nav m-auto mb-2 mb-lg-0">
                    ${nav_AnchorTag}
                  </div>
                  <form class="d-flex">
                    <button class="btn btn-dark">Search</button>
                  </form>
                </div>
              </div>
            </nav>`


            let carousel=`<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                ${bottom_nav}
              </div>
              <div class="carousel-inner">
                ${crs_div}
                
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>`

            let about=` <div class="container-fluid bg-danger py-5 text-light">
            <div class="container">
              <div class="row">
                  <div class="col-4"  data-aos="fade-up"
     data-aos-anchor-placement="top-center">
                      <h1>Hello</h1>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eveniet nulla laudantium dolorem quia eaque culpa. Possimus voluptatibus nihil beatae sequi magnam molestiae alias adipisci, esse iure at veritatis corporis.</p>
                  </div>
                  <div class="col-4">
                      <h1>Hello</h1>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eveniet nulla laudantium dolorem quia eaque culpa. Possimus voluptatibus nihil beatae sequi magnam molestiae alias adipisci, esse iure at veritatis corporis.</p>
                  </div>
                  <div class="col-4">
                      <h1>Hello</h1>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eveniet nulla laudantium dolorem quia eaque culpa. Possimus voluptatibus nihil beatae sequi magnam molestiae alias adipisci, esse iure at veritatis corporis.</p>
                  </div>
                   <div class="col-4"  data-aos="fade-up"
     data-aos-anchor-placement="top-center">
                      <h1>Hello</h1>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eveniet nulla laudantium dolorem quia eaque culpa. Possimus voluptatibus nihil beatae sequi magnam molestiae alias adipisci, esse iure at veritatis corporis.</p>
                  </div>
                  <div class="col-4">
                      <h1>Hello</h1>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eveniet nulla laudantium dolorem quia eaque culpa. Possimus voluptatibus nihil beatae sequi magnam molestiae alias adipisci, esse iure at veritatis corporis.</p>
                  </div>
                  <div class="col-4">
                      <h1>Hello</h1>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eveniet nulla laudantium dolorem quia eaque culpa. Possimus voluptatibus nihil beatae sequi magnam molestiae alias adipisci, esse iure at veritatis corporis.</p>
                  </div>
                   <div class="col-4"  data-aos="fade-up"
     data-aos-anchor-placement="top-center">
                      <h1>Hello</h1>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eveniet nulla laudantium dolorem quia eaque culpa. Possimus voluptatibus nihil beatae sequi magnam molestiae alias adipisci, esse iure at veritatis corporis.</p>
                  </div>
                  <div class="col-4">
                      <h1>Hello</h1>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eveniet nulla laudantium dolorem quia eaque culpa. Possimus voluptatibus nihil beatae sequi magnam molestiae alias adipisci, esse iure at veritatis corporis.</p>
                  </div>
                  <div class="col-4">
                      <h1>Hello</h1>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eveniet nulla laudantium dolorem quia eaque culpa. Possimus voluptatibus nihil beatae sequi magnam molestiae alias adipisci, esse iure at veritatis corporis.</p>
                  </div>
              </div>
            </div>
        </div>`
          document.body.innerHTML=header;
          document.body.innerHTML+=carousel;
          document.body.innerHTML+=about;
      }

      function setActiveClass(e){
        let already_Active=document.querySelector(".navbar-nav .active");
        already_Active.className='nav-link';
        e.className='nav-link active';
      }
      LoadFn()

      window.addEventListener('scroll',()=>{
        
        if(pageYOffset>=80){
            bgClass='bg-success'
            LoadFn()
        }
        else{
            bgClass=''
            LoadFn()
        }
      })
   