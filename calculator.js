
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")

let plus = document.getElementById("+")
let minus = document.getElementById("-")
let mul = document.getElementById("*")
let div = document.getElementById("/")

let zero = document.getElementById("0")
let double = document.getElementById("00")
let AC = document.getElementById("AC")
let DELETE = document.getElementById("del")
let dot = document.getElementById("dot")

let inp = document.getElementById("input")
let buttons=document.querySelectorAll("button");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let val = btn.innerText;

        if (val === "AC") {
            inp.value = "";
        } 
        else if (val === "delete") {
            inp.value = inp.value.slice(0, -1);
        } 
        else if (val === "=") {
            try {
                inp.value = eval(inp.value);
            } catch {
                inp.value = "Error";
            }
        } 
        else {
            inp.value += val;
        }
    });
});


one.addEventListener("click",()=>{
    inp.value+="one";
    
})
two.addEventListener("click",()=>{
    inp.value+="two";
    
})
three.addEventListener("click",()=>{
    inp.value+="three";
    
})
four.addEventListener("click",()=>{
    inp.value+="four";
    
})
five.addEventListener("click",()=>{
    inp.value+="five"; 
})

six.addEventListener("click",()=>{
    inp.value+="six"; 
})

seven.addEventListener("click",()=>{
    inp.value+="seven"; 
})

eight.addEventListener("click",()=>{
    inp.value+="eight"; 
})
nine.addEventListener("click",()=>{
    inp.value+="nine"; 
})

plus.addEventListener("click",()=>{
    inp.value+="+"; 
})

minus.addEventListener("click",()=>{
    inp.value+="-"; 
})

mul.addEventListener("click",()=>{
    inp.value+="*"; 
})

div.addEventListener("click",()=>{
    inp.value+="/"; 
})

dot.addEventListener("click",()=>{
    inp.value+="."; 
})

AC.addEventListener("click",()=>{
    inp.value =""; 
})

del.addEventListener("click",()=>{
    inp.value = inp.value.slice(0,-1)
})

zero.addEventListener("click",()=>{
    inp.value+="0"; 
})
double.addEventListener("click",()=>{
    inp.value+="00"; 
})
 del.addEventListener("click",()=>{
     input.value=input.value.slice(0,-1)
 })
