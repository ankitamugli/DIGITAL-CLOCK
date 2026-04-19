let cards=document.getElementsByClassName("cards")[0];

let input=document.getElementById("inp");
let submit=document.getElementById("submit");
let data =fetch("https://dummyjson.com/products").then((d)=>{
       return(d.json())
}).then((fd)=>{
       let data=fd.quotes;
       data.map((ele)=>{
        submit.addEventListener("click",()=>{
       if(ele.author.toLowerCase().includes(inp.value.toLowerCase())){
          cards.innerHTML+= 
       //    `<div class="card1">
       //         <p>${ele.id}</p>+
       //         <p>${ele.quote}</p>
       //         <p>${ele.author}</p>
       //      </div>`     
        }
             
       })
        })
        
})