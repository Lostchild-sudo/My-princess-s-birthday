const countdown = document.getElementById("countdown");

const targetDate = new Date("June 16, 2026 00:00:00").getTime();

let unlocked = false;
let snowInterval = null;

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

                <img src="images/jasmin.jpg" style="
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

                <button id="submitAnswer">Submit</button>

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
        memoryGate.style.display = "block";
    });

    submit.addEventListener("click", () => {

        const ans = document.getElementById("answer").value.toLowerCase().trim();
        const clean = ans.replace(/\s+/g, " ");

        if (
            clean.includes("17") &&
            (clean.includes("january") || clean.includes("february") || clean.includes("march"))
        ) {

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

        <div style="text-align:center; animation:fadeIn 2s ease;">

            <h1 style="color:#E6E6FA;">Memory Unlocked 🌸</h1>

            <div style="
                width:200px;
                margin:20px auto;
                border-radius:20px;
                overflow:hidden;
                box-shadow:0 0 25px rgba(255,255,255,0.3);
                position:relative;
            ">
                <img src="images/jasmin.jpg" style="width:100%;">
                <div style="
                    position:absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                    background:rgba(255,255,255,0.08);
                    animation: cloudMove 6s infinite alternate;
                "></div>
            </div>

            <p style="color:#E6E6FA;">
                Happy Birthday to my sweet girl ❤️
            </p>

            <p style="color:white; line-height:1.6;">
                I still remember the day we met.<br>
                17th — a moment I can never forget.<br>
                Some memories don’t need many words.
            </p>

        </div>

        `;

        document.querySelector(".card").style.opacity = "1";

        startSnowfall();

    }, 800);
}

/* ---------------- SNOWFALL (LIMITED) ---------------- */

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

        setTimeout(() => snow.remove(), 6000);

    }, 400);
}

function startLavenderParticles(){

    setInterval(() => {

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
