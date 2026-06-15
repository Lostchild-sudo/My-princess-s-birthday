const countdown = document.getElementById("countdown");
const ambienceMusic = document.getElementById("ambienceMusic");

const targetDate = new Date("June 16, 2026 00:00:00").getTime();

let unlocked = false;
let snowInterval = null;
let particleInterval = null;

/* ---------------- COUNTDOWN ---------------- */

function updateCountdown() {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0 && !unlocked) {

        unlocked = true;

        countdown.innerHTML = `
            <div style="font-size:18px; color:#fff;">
                Your gift is ready ✨
            </div>

            <button id="openMemory">
                Unlock Memory 💌
            </button>

            <div id="memoryGate" style="display:none; margin-top:15px;">

                <img src="images/jasmin.jpg"
                style="
                    width:140px;
                    border-radius:18px;
                    margin-top:10px;
                    box-shadow:0 0 25px rgba(255,255,255,0.25);
                ">

                <p style="color:#E6E6FA; margin-top:10px;">
                    Happy Birthday to my sweet girl ❤️
                </p>

                <p>Answer to unlock memory 🌸</p>

                <input id="answer" placeholder="Type your answer..." />

                <button id="submitAnswer">
                    Submit
                </button>

                <p id="response"></p>

            </div>
        `;

        setTimeout(attachEvents, 100);

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `
        ${days} Days<br>
        ${hours} Hours<br>
        ${minutes} Minutes<br>
        ${seconds} Seconds
    `;
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* ---------------- EVENTS ---------------- */

function attachEvents() {

    const openMemory = document.getElementById("openMemory");
    const memoryGate = document.getElementById("memoryGate");
    const submit = document.getElementById("submitAnswer");
    const response = document.getElementById("response");

    if (!openMemory) return;

    openMemory.addEventListener("click", () => {

        ambienceMusic.volume = 0.20;
        ambienceMusic.play();

        memoryGate.style.display = "block";
    });

    submit.addEventListener("click", () => {

        const ans = document.getElementById("answer").value.toLowerCase().trim();

        if (ans.includes("17")) {

            response.innerHTML = "Unlocked ❤️";

            startCinematicReveal();

        } else {

            response.innerHTML = "Try again 🌿";

        }
    });
}

/* ---------------- CINEMATIC REVEAL ---------------- */

function startCinematicReveal() {

    document.body.style.background = "#0b0b10";

    document.querySelector(".card").style.opacity = "0";

    setTimeout(() => {

        document.querySelector(".card").innerHTML = `

        <div class="scene">

            <h1 class="final-title">
                For Jasmin 💜
            </h1>

            <div class="photo-frame">

                <img src="images/jasmin.jpg">

            </div>

            <p style="color:#E6E6FA;">
                Happy Birthday to my sweet girl ❤️
            </p>

            <div class="final-message">

                Thank you for every smile.

                <br><br>

                Even though we met only once,
                that memory became precious to me.

                <br><br>

                Your beautiful eyes and that first handshake
                are memories I still cherish.

                <br><br>

                — Your Cute Cat 🐱

            </div>

        </div>
        `;

        document.querySelector(".card").style.opacity = "1";

        startSnowfall();
        startLavenderParticles();

    }, 800);
}

/* ---------------- SNOWFALL ---------------- */

function startSnowfall() {

    if (snowInterval) clearInterval(snowInterval);

    snowInterval = setInterval(() => {

        const snow = document.createElement("div");

        snow.innerHTML = "❄️";

        snow.style.position = "fixed";
        snow.style.top = "-10px";
        snow.style.left = Math.random() * window.innerWidth + "px";
        snow.style.fontSize = "14px";
        snow.style.opacity = "0.8";
        snow.style.animation = "fall 6s linear forwards";
        snow.style.pointerEvents = "none";

        document.body.appendChild(snow);

        setTimeout(() => {
            snow.remove();
        }, 6000);

    }, 400);
}

/* ---------------- LAVENDER PARTICLES ---------------- */

function startLavenderParticles() {

    if (particleInterval) clearInterval(particleInterval);

    particleInterval = setInterval(() => {

        const particle = document.createElement("div");

        particle.className = "particle";

        particle.innerHTML = "💜";

        particle.style.left = Math.random() * window.innerWidth + "px";

        particle.style.fontSize =
            (14 + Math.random() * 10) + "px";

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 10000);

    }, 1200);
}
