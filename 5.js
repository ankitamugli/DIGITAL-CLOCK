let first=document.getElementsByTagName("input")[0]
let last=document.getElementsByTagName("input")[1]
let email=document.getElementsByTagName("input")[2]

let n=document.getElementsByTagName("span")[0]
let e=document.getElementsByTagName("span")[1]

let arr=[]

let submit=document.getElementsByTagName("button")[0]
console.log(submit)
submit.addEventListener("click",() =>{
    n.innerText=first.value.concat(last.value)
    e.innerText=email.value
    arr.push(first.value)
    console.log(arr)
});

