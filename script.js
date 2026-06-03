// ======================
// WAIT FOR PAGE TO LOAD
// ======================

document.addEventListener("DOMContentLoaded", () => {

    // ======================
    // MUSIC PLAYER FIXED
    // ======================

    const music = document.getElementById("bgMusic");
    const playBtn = document.getElementById("playBtn");

    if (music && playBtn) {

        playBtn.addEventListener("click", async () => {

            try {

                if (music.paused) {

                    await music.play();
                    playBtn.textContent = "⏸ Pause Our Song ❤️";

                } else {

                    music.pause();
                    playBtn.textContent = "▶ Play Our Song ❤️";

                }

            } catch (err) {

                console.log("Music error:", err);
                alert("Tap again or check if 'our-song.mp3' is uploaded correctly.");

            }

        });

    }

    // ======================
    // SMOOTH SCROLL BUTTON
    // ======================

    const startBtn = document.getElementById("startBtn");

    if (startBtn) {

        startBtn.addEventListener("click", () => {

            const section = document.getElementById("journey1");

            if (section) {

                section.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }

    // ======================
    // SURPRISE GIFT BUTTON FIXED
    // ======================

    const surpriseBtn = document.getElementById("surpriseBtn");
    const surpriseMessage = document.getElementById("surpriseMessage");

    if (surpriseBtn && surpriseMessage) {

        surpriseBtn.addEventListener("click", () => {

            surpriseMessage.classList.remove("hidden");

            surpriseMessage.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            // Confetti effect
            if (typeof confetti !== "undefined") {

                confetti({
                    particleCount: 300,
                    spread: 180,
                    origin: { y: 0.6 }
                });

            }

        });

    }

    // ======================
    // FLOATING HEARTS (OPTIMIZED)
    // ======================

    function createHeart() {

        const heart = document.createElement("div");
        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 18 + 12) + "px";
        heart.style.animationDuration = (Math.random() * 4 + 5) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 9000);

    }

    setInterval(createHeart, 900);

    // ======================
    // QUOTE ROTATOR (SAFE)
    // ======================

    const quotes = [
        "You are my today and all of my tomorrows ❤️",
        "Every love story is beautiful, but ours is my favorite 💕",
        "You make my world feel soft and magical ✨",
        "I still fall for you every single day 🌹",
        "You are my forever person ❤️"
    ];

    const quoteBox = document.querySelector(".quote-box p");

    let index = 0;

    if (quoteBox) {

        setInterval(() => {

            index = (index + 1) % quotes.length;

            quoteBox.style.opacity = "0";

            setTimeout(() => {

                quoteBox.textContent = quotes[index];
                quoteBox.style.opacity = "1";

            }, 400);

        }, 4000);

    }

    // ======================
    // FADE-IN ON SCROLL
    // ======================

    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));

});
