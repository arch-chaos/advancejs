// // objects
// // let obj={
// //     name:'Vishal',
// //     address:'Delhi',
// // }
// // let obj1={
// //     name:'Vishal',
// //     age:'17'
// // }

// // const para=document.querySelector('.para')
// // para.innerText='Hello World'
// // para.style.color='blue'
// // console.log(document)

// // const para=document.getElementsByClassName('para')
// // para[0].innerText='Hello World'
// // para[1].style.color='blue'
// // console.log(document)

// // function handleClick(){
// //     alert('Button Clicked')
// // }

// // const btn=document.getElementById('btn')
// // btn.style.backgroundColor='green'
// // btn.style.color='white'

// // const para=document.querySelectorAll('.para') ----> retruns nodelist
// // para[0].innerText='Hello World'
// // para[1].style.color='blue'
// // console.log(document)

// // const para=document.querySelector('.para') //--> returns first element
// // para.innerText='Hello World'
// // para.style.color='blue'
// // console.log(document)

// // let arr=[1,2,3,4,5]
// // const newarr = arr.map((ele)=>ele)
// // console.log(newarr)
// // arr.forEach((ele)=>console.log(ele))

// const btn2=document.querySelector('button')
// // btn2.classList.add('bt1')
// // btn2.classList.remove('bt1')
// function printDoc(){
//     window.print()
// }
// btn2.addEventListener('click', printDoc)


// function message(event){
//     console.log(event.key)
// }
// btn2.addEventListener( 'keydown' ,message )

const bt=document.querySelector('button')

const submissionalert = ()=>{
    alert('Details Submitted Successfully!')
}

const toogleTheme = ()=>{
    document.body.classList.toggle('dark-theme')
}

bt.addEventListener('click', submissionalert)

const container = document.querySelector('container')
const outerdiv = document.querySelector('outer div')
const buton = document.querySelector('buton1')

container.addEventListener('click' , ()=>{console.log('div')})
outerdiv.addEventListener('click' , ()=>{console.log('outer div')})
buton.addEventListener('click' , ()=>{console.log('button')})
