// const para=document.querySelector("p")
// para.innerText="Hello Shubham"
// para.style.backgroundColor="Black"
// para.style.color="White"

// Selecting elements by class name

// const paras=document.getElementsByClassName("para")
// paras[0].innerText="Hello!"
// paras[0].innerHTML="<h1 style='color:red; background-color:Thistle;'>WOOWWWW</h1>"
// paras[1].style.color='Blue'
// Returns an array of elements if there are multiple.

// Selecting elements by id

// const para=document.getElementById("heading")
// para.innerText="MAIN SHUBHAM HUN"
// para.innerHTML="<p id='heading' style='color:Blue;background-color:Thistle;'>MAIN SHUBHAM HUN</p> " 


// Returns a new array
// let arr=[1, 2, 3, 4, 5, 6 ,7]
// const newarr=arr.map((arr)=>2*arr)
// console.log(newarr)    OUTPUT=> Array(7) [ 2, 4, 6, 8, 10, 12, 14 ]


// Doesn't return a new array
// let arr=[1,2,3,4,5,6,7]
// arr.forEach((ele)=>console.log(arr+=2))

// Difference in .textContent and .innerText

// .textContent applies changes to the hidden elements also (display:none or visibility:hidden).
// .innerText doesn't apply changes to hidden elements.

// const container=document.querySelector(".container")
// const button=document.querySelector("button")
// container.addEventListener("click",()=>{
//     console.log("Container clicked")
// })

// button.addEventListener("click",()=>{
//     console.log("Button clicked")
// })

// console.log(a) ERROR: ReferenceError: Cannot access 'a' before initialization
// console.log(b) Undefined

// let a = 239
// var b = 2595

// function hello(){
//     console.log("Hello World")
// }

// hello()



// function first() {
    // second()
// }
// function second() {
    // third()
// }
// function third() {
    // console.trace()
// }
// first()

// let val=40

// function calc(){
//     console.log(val)
//     let val=100
// }

// calc()
// setTimeout(() => {
//     console.log("Hello after 5 seconds")
// }, 5*1000);

// setInterval(() => {
//     console.log("Hello after every 2 seconds")
// }, 2*1000);

// const timerID = setInterval(() => {"set interval"}, 1000);

// const timerID2 = setTimeout(() => {
//     clearInterval(timerID);
// }, 10000);

// const name = document.querySelector("#name")
// const btn = document.querySelector("#btn")
// const list = document.querySelector(".list")

// btn.addEventListener("click", () => {
//     if (name.value == "") {
//         alert("Please enter a valid name")
//         return;
//     }
//     const li = document.createElement("li")
//     const dlt = document.createElement("button")
//     li.innerText = name.value;
//     dlt.innerText = "Delete"
//     dlt.addEventListener("click", () => {
//         list.removeChild(li)
//     })
//     li.appendChild(dlt)
//     list.appendChild(li)
//     name.value = ""
//     })

// function print(num){
//     setTimeout(() => {
//         console.log("Inside print")
//         num()
// } ,2000)}

// function sample(){
//     console.log("Inside callback")
// }

// print(sample)
// console.log("Starting Homework")

// setTimeout(() => {
//     console.log("Homework done");
//     console.log("Starting dinner...");

//     setTimeout(() => {
//         console.log("Dinner done");
//         console.log("Getting ready to go out...");

//         setTimeout(() => {
//             console.log("Going to playground");
//         }, 1000);
//     }, 2500);
// }, 2000);


// function finishHomework(callback){
//     console.log("Starting homework...");
//     setTimeout(() => {
//         console.log("Homework finished");
//         callback()
//     }, 2000);
// }

const p = new Promise((resolve, reject) => {
    let done = true;
    setTimeout(() => {
        if (done) {
            resolve("Homework is done");
        } else {
            reject("Homework is not done");
        }
}, 2000);});
p.then((data) => {
    console.log(data);
}).catch((er) =>{
    console.log(er);
}).finally(() => {
    console.log("Finally back")
})