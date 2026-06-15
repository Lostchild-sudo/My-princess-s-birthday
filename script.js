const countdown = document.getElementById("countdown");
const ambienceMusic = document.getElementById("ambienceMusic");

const targetDate = new Date("June 16, 2026 00:00:00").getTime();

let unlocked = false;
let snowInterval = null;
let particleInterval = null;
let countdownInterval = null;

/* ---------------- COUNTDOWN ---------------- */

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0 && !unlocked) {
        unlocked = true;
        
        clearInterval(countdownInterval);

        countdown.innerHTML = `
            <div style="font-size:18px; color:#fff; margin-bottom:15px;">
                Your gift is ready ✨
            </div>

            <button id="openMemory">
                Unlock Memory 💌
            </button>

            <div id="memoryGate" style="display:none; margin-top:15px;">

                <p style="color:#E6E6FA; margin-top:10px;">
                    Happy Birthday to my sweet girl ❤️
                </p>

                <p style="color:#fff; margin:15px 0;">
                    Answer this riddle to unlock your memory 🌸
                </p>

                <p style="color:#D4AF37; font-style:italic; margin-bottom:15px;">
                    "What number holds the key to your heart?"
                </p>

                <input id="answer" placeholder="Type your answer..." autocomplete="off" />

                <p class="hint-text">Press Enter to submit</p>

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

countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

/* ---------------- EVENTS ---------------- */

function attachEvents() {
    const openMemory = document.getElementById("openMemory");
    const memoryGate = document.getElementById("memoryGate");
    const submit = document.getElementById("submitAnswer");
    const response = document.getElementById("response");
    const answerInput = document.getElementById("answer");

    if (!openMemory) return;

    openMemory.addEventListener("click", async () => {
        openMemory.disabled = true;
        openMemory.textContent = "Loading...";

        try {
            ambienceMusic.volume = 0.20;
            await ambienceMusic.play();
        } catch (err) {
            console.log("Audio play failed:", err);
        }

        openMemory.textContent = "Memory Unlocked 💌";
        memoryGate.style.display = "block";
        
        if (answerInput) {
            setTimeout(() => answerInput.focus(), 300);
        }
    });

    submit.addEventListener("click", checkAnswer);

    if (answerInput) {
        answerInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                checkAnswer();
            }
        });
    }

    function checkAnswer() {
        const ans = answerInput.value.toLowerCase().trim();

        if (ans === "17") {
            response.innerHTML = "Unlocked ❤️";
            response.style.color = "#90EE90";
            
            submit.disabled = true;
            answerInput.disabled = true;
            
            startCinematicReveal();
        } else {
            response.innerHTML = "Try again 🌿";
            response.style.color = "#FFB6C1";
            
            answerInput.style.animation = "shake 0.5s ease";
            setTimeout(() => {
                answerInput.style.animation = "";
                answerInput.value = "";
                answerInput.focus();
            }, 500);
        }
    }
}

/* ---------------- CINEMATIC REVEAL ---------------- */

function startCinematicReveal() {
    document.body.style.background = "#0b0b10";
    document.body.style.transition = "background 1.5s ease";

    const card = document.querySelector(".card");
    card.style.opacity = "0";

    setTimeout(() => {
        // PHOTO ONLY APPEARS HERE — after correct answer!
        card.innerHTML = `
            <div class="scene">
                <h1 class="final-title">
                    For Jasmin 💜
                </h1>

                <div class="photo-frame">
                    <img src="images/jasmin.jpg" alt="Jasmin">
                </div>

                <p style="color:#E6E6FA; margin-top:15px;">
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
                    — My Cute Cat 😚
                </div>
            </div>
        `;

        card.style.opacity = "1";

        startSnowfall();
        startLavenderParticles();

    }, 800);
}

/* ---------------- SNOWFALL ---------------- */

function startSnowfall() {
    if (snowInterval) clearInterval(snowInterval);

    snowInterval = setInterval(() => {
        const snow = document.createElement("div");
        snow.className = "snow";
        snow.innerHTML = "❄️";
        snow.style.position = "fixed";
        snow.style.top = "-10px";
        snow.style.left = Math.random() * window.innerWidth + "px";
        snow.style.fontSize = "14px";
        snow.style.opacity = "0.8";
        snow.style.animation = "fall 6s linear forwards";
        snow.style.pointerEvents = "none";
        snow.style.userSelect = "none";

        document.body.appendChild(snow);

        setTimeout(() => {
            if (snow.parentNode) snow.remove();
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
        particle.style.fontSize = (14 + Math.random() * 10) + "px";

        document.body.appendChild(particle);

        setTimeout(() => {
            if (particle.parentNode) particle.remove();
        }, 10000);

    }, 1200);
}

/* ---------------- CLEANUP ---------------- */

window.addEventListener("beforeunload", () => {
    if (countdownInterval) clearInterval(countdownInterval);
    if (snowInterval) clearInterval(snowInterval);
    if (particleInterval) clearInterval(particleInterval);
});

// Add shake animation for wrong answer
const shakeStyle = document.createElement("style");
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(shakeStyle);
