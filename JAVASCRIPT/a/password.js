let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let num ="1234567890"  
let spl_char = "!@#$%^&*()-_+="
let all = uppercase+lowercase+num+spl_char
let btn = document.getElementById("btn")

let passwordLength = 14;
let h2 = document.getElementById("h2")

let generate = () =>{
    let password = ""
    for(let i=0;i<passwordLength;i++){
        let random = Math.floor(Math.random()*all.length)
        password += all[random]
    }
    h2.innerText = password
}
let copy=()=>{
  if(passward.value.length !=14){
    alert("please generate passward")
  }
  // else{
  //   let con =confrom("do you want to copy the passward"){
      
  //     let(con==true){

        
  //     }
  //   }
  // }
}