
let navbar = document.getElementById("navbar")
navbar.style.display = "flex"
navbar.style.justifyContent = "space-around"
navbar.style.alignItems = "center"
navbar.style.backgroundColor = "lightblue"
navbar.style.height = "60px"



let heading = document.getElementById("heading")
heading.style.display = "flex"
heading.style.gap = "30px"
heading.style.fontSize = "20px"
heading.style.justifyContent = "space-evenly"



let links = heading.getElementsByTagName("a")

links[0].style.textDecoration = "none"
links[0].style.color = "black"
links[0].onclick = function (e) {
    e.preventDefault()
    alert("Home clicked")
}

links[1].style.textDecoration = "none"
links[1].style.color = "black"
links[1].onclick = function (e) {
    e.preventDefault()
    alert("About clicked")
}

links[2].style.textDecoration = "none"
links[2].style.color = "black"
links[2].onclick = function (e) {
    e.preventDefault()
    alert("Contact clicked")
}

links[3].style.textDecoration = "none"
links[3].style.color = "black"
links[3].onclick = function (e) {
    e.preventDefault()
    alert("Location clicked")
}



let text = document.getElementById("text")
text.style.textAlign = "center"

let h1 = text.getElementsByTagName("h1")

h1[0].style.fontSize = "30px"
h1[1].style.fontSize = "30px"
h1[2].style.fontSize = "30px"



let pp = document.getElementById("pp")
pp.style.fontSize = "16px"



let logos = document.getElementById("logos")
logos.style.display = "flex"
logos.style.gap = "20px"

let logoLinks = logos.getElementsByTagName("a")

logoLinks[0].style.fontSize = "25px"
logoLinks[0].style.color = "black"

logoLinks[1].style.fontSize = "25px"
logoLinks[1].style.color = "black"

logoLinks[2].style.fontSize = "25px"
logoLinks[2].style.color = "black"



let hireme = document.getElementById("hireme")
hireme.style.padding = "10px"
hireme.style.backgroundColor = "black"
hireme.style.color = "white"

hireme.onclick = function () {
    alert("Hire Me clicked")
}


let contact = document.getElementById("contactme") // ✅ fixed
contact.style.padding = "10px"
contact.style.backgroundColor = "black"
contact.style.color = "white"

contact.onclick = function () {
    alert("Contact Me clicked")
}



let imgDiv = document.getElementById("img")
let img = imgDiv.getElementsByTagName("img")[0]

img.style.width = "300px"
img.style.borderRadius = "10px"

img.onclick = function () {
    alert("Image clicked")
}
let navbar =document.getElementById(navbar)
navbar.style.display="flex"