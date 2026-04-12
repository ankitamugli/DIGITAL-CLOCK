let firstname = document.getElementsByTagName("input")[0]
let lastname = document.getElementsByTagName("input")[1]
let email = document.getElementsByTagName("input")[2]
let contact = document.getElementsByTagName("input")[3]

let card = document.getElementsByTagName("card")[0]


let n = document.getElementsByTagName("span")[0]
let e = document.getElementsByTagName("span")[0]
let c = document.getElementsByTagName("span")[0]

let submit = document.getElementsByTagName("input")[0]
// console.log(firstname)
// console.log(submit)
// console.log(lastname)
// console.log(contact)
submit.addEventListener("click",() =>{
    if (firstname.value.length<1 || lastname.value.length<1 ||contact.value.length!=10 ||isNaN(contact.value)||email.value.length<1){
        alert("please provide proer input")
    }
    else{
        card.innerhtml+= ` <h1>name: <span class="name"></span></h1>
                <h1>email: <span class="e">${email.value}</span></h1>
                 <h1>contact: <span class="c">${contact.value}</span></h1>`
    }
})let container = document.getElementsByTagName("container")[0]


// let head = document.getElementsByTagName("head")[1]
// let submit= document.getElementsByTagName("submit")[2]
// let img = document.getElementsByTagName("img")[3]
// submit.addEventListener("click",() =>{
//     if(head.value==""{
//         alert("please provide proper input")
//     })
//     img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${InputDeviceInfo.value}`

// })


   
