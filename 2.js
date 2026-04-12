let navbar=document.getElementById("navbar")
navbar.style.display="flex"
navbar.style.justifyContent="space-around"
navbar.style.fontSize="20px"
navbar.style.height="60px"
navbar.style.border="1px solid black"
navbar.style.alignItems="center"
let links=document.querySelectorAll("#anchor a")
links.forEach(link => {
    link.style.textDecoration="none";
})

let heading=document.getElementById("heading")
heading.style.display="flex"
heading.style.gap="30px"
heading.style.color="black"
heading.style.marginLeft="500px"
