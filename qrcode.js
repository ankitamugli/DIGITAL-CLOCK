let first = document.getElementById("inp")
let submit = document.getElementById("btn")
let img = document.getElementById("img")

img.style.display = "none"
submit.addEventListener("click", () => {
  console.log(first.value);
  let con = confirm("Do you want submit:")
  if (con == true) {
    if (first.value === "") {
      alert("Enter the proper input")
    } else {

      img.style.display = "block";
      img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${first.value}`
    }
  if(img.src !=""){
 setInterval(() => {
   img.style.display=" "
    }, 5000)
 }, 6000);
    
  
   

  }
  else {
    alert("cancle")
  }
})