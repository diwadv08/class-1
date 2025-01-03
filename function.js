
// (function Name(a,b){
//     document.write(`<h1>The sum of <span>${a}</span> and <span>${b}</span> is <span>${a+b}</span></h1>`)
//     document.write(`<h1>The diffrence of <span>${a}</span> and <span>${b}</span> is <span>${a-b}</span></h1>`)
//     document.write(`<h1>The multiplication of <span>${a}</span> and <span>${b}</span> is <span>${a*b}</span></h1>`)
//     document.write(`<h1>Power of <span>${a}</span> and <span>${b}</span> is <span>${a**b}</span></h1>`)
//     document.write(`<h1>Quotient of <span>${a}</span> and <span>${b}</span> is <span>${a/b}</span></h1>`)
//     document.write(`<h1>Remainder of <span>${a}</span> and <span>${b}</span> is <span>${a%b}</span></h1>`)
// }(6,4))

// function Name(a=1,b=1){
//     document.write(`<h1>The sum of <span>${a}</span> and <span>${b}</span> is <span>${a+b}</span></h1>`)
//     document.write(`<h1>The diffrence of <span>${a}</span> and <span>${b}</span> is <span>${a-b}</span></h1>`)
//     document.write(`<h1>The multiplication of <span>${a}</span> and <span>${b}</span> is <span>${a*b}</span></h1>`)
//     document.write(`<h1>Power of <span>${a}</span> and <span>${b}</span> is <span>${a**b}</span></h1>`)
//     document.write(`<h1>Quotient of <span>${a}</span> and <span>${b}</span> is <span>${a/b}</span></h1>`)
//     document.write(`<h1>Remainder of <span>${a}</span> and <span>${b}</span> is <span>${a%b}</span></h1>`)
//     document.write(`<hr>`)
// }


function card(b='--Default--',c='--Default--',a='https://bootstrapmade.com/content/demo/Active/assets/img/img_h_4.jpg'){
    return(`<div class="col-6 mt-3">
                <div class="card">
                    <img src="${a}" alt="" height="180">
                   <div class="card-body">
                    <h1>${b}</h1>
                    <p>${c}</p>
                   </div>
                </div>
            </div>`)
}

document.write(`<div class='container'>`)
document.write(`<div class='row'>`)

document.write(card("Hi","Paragraph","https://bootstrapmade.com/content/demo/Active/assets/img/img_h_2.jpg",))
document.write(card())
document.write(card("Text-2"))
document.write(card("Text-2","Text-2"))


document.write(`</div>`)
document.write(`</div>`)
