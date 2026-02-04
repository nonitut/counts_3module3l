document.addEventListener("DOMContentLoaded", function() {

let count = 0;

count = count + 1;
console.log(count)

count++
console.log(count)

///////////////////////

let countp = 0;

let button = document.querySelector(".countclick");
let pcount = document.querySelector(".pcount");

button.addEventListener("click", function(){
    countp++;
    pcount.textContent = countp;
});

///////////////////////

let co = 0;

let cobu = document.querySelector(".cobu");
let pco = document.querySelector(".pco");

cobu.addEventListener("click" , function(){
    co++;
    pco.textContent = co;

    if(co >= 20){
        cobu.disabled = true;
    }
});

///////////////////////

let o = 0;
let l = 1;

let but = document.querySelector(".but");
let point = document.querySelector(".point");

but.addEventListener("click", function () {
  o += l;
  point.textContent = o;

  if (o >= 20 || o <= 0) {
    l *= -1;
  }
});

///////////////////////

let p = 0;

let mi = document.querySelector(".mi");
let value = document.querySelector(".value");
let pl = document.querySelector(".pl");

pl.addEventListener("click", function(){
    p++
    value.textContent = p;
});

mi.addEventListener("click", function(){
    p--
    value.textContent = p;
});

///////////////////////

let r = 0;

setInterval(function(){
    r++
    // console.log(r);
},5000);

///////////////////////

let w = 0;
let timer = document.querySelector(".timer");

setInterval( function(){
    w++;
    timer.textContent = w;
}, 1000);

///////////////////////

let x = 0;
let team =  document.querySelector(".team");

let some_time = setInterval( function(){
    x++;
    team.textContent = x;

    if(x === 4){
        clearInterval(some_time)
    }
}, 1000);


///////////////////////

let hi = document.querySelector(".hi");
let visible = true;

setInterval(function(){
    visible = !visible;
    hi.style.opacity =  visible ? 1 : 0;
}, 2000);


});
