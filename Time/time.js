setInterval(() => {

    let date = new Date();
    let hrs = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    if (hrs > 12) {
        hrs = hrs - 12
        h.innerText = `${hrs} pm`
        m.innerText = `${min} min`
        s.innerText = `${sec} sec`
    }
    else {
        h.innerText = `${hrs} am`
        m.innerText = `${min} min`
        s.innerText = `${sec} sec`
    }
}, 6000);