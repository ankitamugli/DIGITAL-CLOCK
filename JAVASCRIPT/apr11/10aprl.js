let cards = document.getElementsByClassName("cards")[0]

let data = fetch("https://fakestoreapiserver.reactbd.org/api/products").then((d) => {
    return (d.json())
}).then((fd) => {
    console.log(fd.data[0])
    let data = fd.data
    data.map((ele) => {
        cards.innerHTML += `
            <div class="card1">
            <h2>${ele._id}</h2>
            <h1>${ele.title}</h1>
            <img src=${ele.image} alt="">
            <p>${ele.description}</p>
              <h3>price:${ele.price}</h3>
            

        </div>
        `
        console.log(ele._id);
        console.log(ele.description);
        console.log(ele.image);
        console.log(ele.category);
        console.log(ele.description);
        console.log(ele.price )
    })
})