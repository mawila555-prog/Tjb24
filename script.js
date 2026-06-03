// ======================
// MUSIC PLAYER
// ======================

const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");

if (playBtn && music) {

```
playBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        playBtn.innerHTML = "⏸ Pause Our Song";
        playBtn.classList.add("playing");

    } else {

        music.pause();

        playBtn.innerHTML = "▶ Play Our Song";
        playBtn.classList.remove("playing");

    }

});
```

}

// ======================
// FADE-IN ANIMATION
// ======================

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(

```
(entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},

{
    threshold: 0.2
}
```

);

fadeElements.forEach((el) => observer.observe(el));

// ======================
// SURPRISE BUTTON
// ======================

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

if (surpriseBtn) {

```
surpriseBtn.addEventListener("click", () => {

    surpriseMessage.classList.remove("hidden");

    surpriseMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    if (typeof confetti !== "undefined") {

        confetti({
            particleCount: 250,
            spread: 180,
            origin: { y: 0.6 }
        });

    }

});
```

}

// ======================
// FLOATING HEARTS
// ======================

function createHeart() {

```
const heart = document.createElement("div");

heart.innerHTML = "❤️";
heart.classList.add("heart");

heart.style.left = Math.random() * 100 + "vw";

heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

heart.style.animationDuration =
    Math.random() * 5 + 5 + "s";

document.body.appendChild(heart);

setTimeout(() => {
    heart.remove();
}, 10000);
```

}

setInterval(createHeart, 700);

// ======================
// LOVE QUOTES ROTATOR
// ======================

const quotes = [

```
"You are my today and all of my tomorrows. ❤️",

"Every love story is beautiful, but ours is my favorite. 💕",

"You make ordinary days feel magical. ✨",

"The best thing that ever happened to me was meeting you. ❤️",

"I still fall for you every single day. 🌹"
```

];

const quoteBox = document.querySelector(".quote-box p");

let quoteIndex = 0;

if (quoteBox) {

```
setInterval(() => {

    quoteIndex++;

    if (quoteIndex >= quotes.length) {
        quoteIndex = 0;
    }

    quoteBox.style.opacity = 0;

    setTimeout(() => {

        quoteBox.textContent =
            quotes[quoteIndex];

        quoteBox.style.opacity = 1;

    }, 400);

}, 4000);
```

}

// ======================
// TYPING EFFECT
// ======================

const typingElement =
document.querySelector(".typing-text");

const typingMessage =
"Happy Birthday my love. Thank you for every smile, every laugh, and every beautiful memory we've shared together. ❤️";

if (typingElement) {

```
typingElement.innerHTML = "";

let i = 0;

function typeWriter() {

    if (i < typingMessage.length) {

        typingElement.innerHTML +=
            typingMessage.charAt(i);

        i++;

        setTimeout(typeWriter, 45);

    }

}

typeWriter();
```

}

// ======================
// HERO BUTTON
// ======================

const startBtn = document.getElementById("startBtn");

if (startBtn) {

```
startBtn.addEventListener("click", () => {

    const firstSection =
        document.getElementById("journey1");

    if (firstSection) {

        firstSection.scrollIntoView({
            behavior: "smooth"
        });

    }

});
```

}
