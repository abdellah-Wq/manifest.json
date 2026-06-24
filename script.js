let targetDate = new Date("2026-06-26").getTime();

setInterval(() => {
    let now = new Date().getTime();
    let distance = targetDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

    let el = document.getElementById("countdown");
    if(!el) return;

    el.innerHTML = `${days}d ${hours}h ${minutes}m`;

    if(distance < 0){
        el.innerHTML = "💖 The Moment Has Come 💖";
    }
}, 1000);
