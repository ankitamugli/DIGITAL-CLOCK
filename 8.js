// let a="Ankita"
// setInterval(() => {
//     console.log(a)
// },6000)
// setInterval(() => {
//    let date =new date();
// let hrs=date.gethours();
// let sec=date.getseconds();
// console.log(`${hrs} hrs :${sec}sec :${date}date`)
//  }, 1000);

// let h = document.getElementById("h")[0]
// let m = document.getElementById("m")[1]
// let s = document.getElementById("s")[0]



setInterval(() => {
    let date = new date();
    let hrs = date.gethours();
    let min = date.getminutse();
    let sec = date .getseconds();

    if (hrs >= 12) {
        hrs = hrs - 12
        h.innertext = `${hours} pm`
        m.innertext = `${min} min`
        s.innertext = `${sec}sec`
    }
    elseif(hrs === 12)
    {
        h.inner = `${hrs}pm`
        m.innertext =`${min} min`
        s.innertext = `${sec} sec`

    }
    console.log(`${h} hrs :${s}sec :${m}min:`)
}, 1000);

setInterval(() => {
    
let date = new Date();
let hrs = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()

// console.log(`${h}Hrs: ${m}Min: ${s}Sec:`)
if(hrs>12){
    hrs = hrs-12
    h.innerText = `${hrs} pm`
    m.innerText = `${min} min`
    s.innerText = `${sec} sec`
}
else{
    h.innerText = `${hrs} am`
    m.innerText = `${min} min`
    s.innerText = `${sec} sec`
}
}, 6000);