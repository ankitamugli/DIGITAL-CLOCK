let cards=document.getElementsByClassName("cards")[0];
let data =fetch("https://dummyjson.com/products").then((d)=>{
       return(d.json())
}).then((fd)=>{
       let data=fd.products
       data.map((ele)=>{
              cards.innerHTML+=`<div class="card1">
               <p>${ele.id}</p>
               <p>${ele.title}</p>
               <p>${ele.price}</p>
               <img src="${ele.images}" alt="">
                <p>${ele.description}</p>
            </div>`
       })
       
})