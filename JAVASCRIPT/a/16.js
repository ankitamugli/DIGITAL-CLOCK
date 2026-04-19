let cards=document.getElementsByClassName("cards")[0]
let url= "https://dummyjson.com/carts"

let task=async () => {
    let data = await fetch(url)
    let fd = await data.json()
    let map_data=fd.carts
    map_data.forEach((e) => {
     cards.innerHtml +=`  
      <div class="card">
                <h1>${e.id}</h1>
                <p>${e.price}</p>
                <h2>${e.title}</h2>
                <h3>${e.quantity}</h3>
                <h1>${e.total}</h1>
                <p>${e.discountPercentage}</p>
                <h2>${e.discountedTotal}</h2>
                <h3>${e.thumbnail}</h3>

            </div>`
    })

}
task()