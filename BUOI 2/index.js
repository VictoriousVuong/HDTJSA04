// //get

// //by id
// // console.log(h1Element);

// //by class
// const h1Hiclass = document.getElementsByClassName("hi");
// h1Hiclass[0].innerText = "1234";
// h1Hiclass[1].innerText = "2345";
// h1Hiclass[1].style.color = "red";
// h1Hiclass[1].style.fontSize = "50px";
// h1Hiclass[0].innerHTML = `
//     <p> Hello h3 </p>
//     <h3> Hello p </h3>
// `

// let a = 1;
// console.log(`I have ${a} ${a < 2 ? 'apple' : "apples"}`);  
// string template

// //arrow function
// function add(a, b){
//     return a + b;
// }
// const add = (a, b) => {
//     return a + b
// }
// const add = (a, b) => a + b;
// console.log(add(1, 3));

// event listener
// let times = 0;
// const h1Element = document.getElementById("hello");
// h1Element.addEventListener("click", () => {
//     times++;
//     h1Element.innerText = `You clicked ${times} times`;
// })

// hw
// + and - button
//  max 10 min 0
// change color button : when click, counter number change to random color
// generate random rgb color by generate 3 numbers
let changingnumber = null
let plus = document.getElementById("plus1");
let minus = document.getElementById("minus");
let number = document.getElementById("zero");
let change = document.getElementById("change1")
plus.addEventListener("click", function(){
    changingnumber = Number(number.innerText);
    changingnumber += 1;
    if(changingnumber > 10){
        changingnumber = 0;
    }
    number.innerText = changingnumber;
})
minus.addEventListener("click", function(){
    changingnumber = Number(number.innerText);
    changingnumber -= 1;
    if(changingnumber < 0){
        changingnumber = 10;
    }
    number.innerText = changingnumber;
})
change.addEventListener("click", function(){
    number.style.color =  "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";
})