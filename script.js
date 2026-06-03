document.addEventListener("DOMContentLoaded", () => {

```
const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

// =========================
// START JOURNEY BUTTON
// =========================
startBtn.addEventListener("click", () => {

    // Play music (must be triggered by user click)
    if (bgMusic) {
        bgMusic.volume = 0.5;
        bgMusic.play().catch(err => {
            console.log("Autoplay blocked:", err);
        });
    }

    // Scroll to first journey
    document.getElementById("journey1").scrollIntoView({
        behavior: "smooth"
    });

    // Optional: small visual effect
    startFloatingHearts();
});


// =========================
// SURPRISE BUTTON
// =========================
if (surpriseBtn) {
    surpriseBtn.addEventListener("click", () => {

        surpriseMessage.classList.toggle("hidden");

        // Add extra celebration effect
        createBurstHearts();

    });
}


// =========================
// SCROLL ANIMATIONS
// =========================
const sections = document.querySelectorAll(".journey, .final");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.classList.add("hidden-section");
    observer.observe(section);
});


// =========================
// FLOATING HEARTS EFFECT
// =========================
function startFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("floating-heart");

        document.body.appendChild(heart);

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 10) + "px";

        setTimeout(() => {
            heart.remove();
        }, 4000);

    }, 800);
}


// =========================
// BURST HEARTS (SURPRISE)
// =========================
function createBurstHearts() {
    for (let i = 0; i < 20; i++) {

        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.classList.add("burst-heart");

        document.body.appendChild(heart);

        heart.style.left = (window.innerWidth / 2) + "px";
        heart.style.top = (window.innerHeight / 2) + "px";

        const angle = Math.random() * 360;
        const distance = Math.random() * 200;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        heart.animate([
            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
        ], {
            duration: 1000,
            easing: "ease-out"
        });

        setTimeout(() => heart.remove(), 1000);
    }
}
```

});
