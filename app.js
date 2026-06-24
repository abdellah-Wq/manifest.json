function startExperience() {
    const intro = document.getElementById("intro");
    const music = document.getElementById("bgmusic");

    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
        music.volume = 0.25;
        music.play();
    }, 1200);
}

/* 🔄 page transition */
document.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", e => {
        const href = a.getAttribute("href");
        if(!href) return;

        e.preventDefault();
        document.body.style.opacity = 0;

        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});

/* 📲 PWA */
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}
