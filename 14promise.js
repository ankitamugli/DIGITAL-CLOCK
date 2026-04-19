let cards = document.getElementsByClassName("cards")[0]

let url = "https://dummyjson.com/todos"

let task = async () => {
    let data = await fetch(url)
    let fd = await data.json()
    let map_data = fd.todos

    map_data.forEach((e) => {
        if (e.completed == false) {
            cards.innerHTML += `
            <div class="card" style="background-color: rgb(175, 77, 93);">
                <h4>${e.id}</h4>
                <p>${e.todo}</p>
                <h3>${e.completed}</h3>
                <h5>${e.userId}</h5>
            </div>`
        } else {
            cards.innerHTML += `
            <div class="card" style="background-color: green;">
                <h4>${e.id}</h4>
                <p>${e.todo}</p>
                <h3>${e.completed}</h3>
                <h5>${e.userId}</h5>
            </div>`
        }
    })
}

 task()


 
// let url = "https://dummyjson.com/quotes"

// let task = async () => {
//     let data = await fetch(url)
//     let fd = await data.json()
//     let map_data = fd.quotes

//     map_data.forEach((e) => {
//         cards.innerHTML += `
//         <div class="card" style="background-color: pink;">
//             <h4>${e.id}</h4>
//             <p>${e.quote}</p>
//             <h3>${e.author}</h3>
//         </div>`
//     })
// }

// task()

// let url = "https://dummyjson.com/products"

// let task = async () => {
//     let data = await fetch(url)
//     let fd = await data.json()
//     let map_data = fd.products

//     map_data.forEach((e) => {
//         cards.innerHTML += `
//         <div class="card" style="background-color: blue;">
//             <h4>${e.id}</h4>
//             <p>${e.description}</p>
//             <h3>${e.title}</h3>
//              <h4>${e.price}</h4>
//               <p>${e.brand}</p>
//               <h4>${e.rating}</h4>
//               <p>${e.availabilityStatus}</p>
//                <h4>${e.stock}</h4>


//         </div>`
//     })
// }
// task()


// let url = "https://dummyjson.com/users"

// let task = async () => {
//     let data = await fetch(url)
//     let fd = await data.json()
//     let map_data = fd.users

//     map_data.forEach((e) => {
//         cards.innerHTML += `
//         <div class="card" style="background-color: lightpink;">
//             <h4>${e.id}</h4>
//             <p>${e.firstName}</p>
//             <p>${e.lastName}</p>
//             <p>${e.maidenName}</p>
//             <h3>${e.age}</h3>
//             <h4>${e.genders}</h4>
//             <p>${e.email}</p>
//             <h4>${e.phone}</h4>
//             <p>${e.username}</p>
//             <h4>${e.password}</h4>
//             <h4>${e.birthDate}</h4>
              

//         </div>`
//     })
// }

// task()