let bgClass='bg-danger';

function LoadFn(){
    document.body.innerHTML=`<nav class="navbar navbar-expand-lg navbar-dark ${bgClass} fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav m-auto mb-2 mb-lg-0">
                <a class="nav-link active" href="#">Home</a>
                <a class="nav-link" href="#">About</a>
                <a class="nav-link" href="#">Contact</a>
                <a class="nav-link" href="#">Help</a>
            </div>
            <form class="d-flex">
              <button class="btn btn-dark">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div class="bg-danger">
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </div>`
}
LoadFn()


      window.addEventListener('scroll',()=>{
        
        if(pageYOffset>=80){
            bgClass='bg-success'
            LoadFn()
        }
        else{
            bgClass='bg-danger'
            LoadFn()
        }
      })