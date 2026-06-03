const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");
const surpriseBtn = document.getElementById("surpriseBtn");
const secretMessage = document.getElementById("secretMessage");

startBtn.addEventListener("click", () => {

```
music.play();

document.querySelector(".journey")
    .scrollIntoView({
        behavior: "smooth"
    });
```

});

surpriseBtn.addEventListener("click", () => {

```
secretMessage.style.display = "block";

createHeartBurst();
```

});

function createHeartBurst() {

```
for(let i = 0; i < 25; i++){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * window.innerWidth + "px";

    heart.style.bottom = "0px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}
```

}

setInterval(() => {

```
const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left =
    Math.random() * window.innerWidth + "px";

heart.style.bottom = "-20px";

document.body.appendChild(heart);

setTimeout(() => {
    heart.remove();
}, 4000);
```

}, 1500);
