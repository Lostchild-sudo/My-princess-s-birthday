const countdown = document.getElementById("countdown");

const targetDate = new Date("June 16, 2026 00:00:00").getTime();

let unlocked = false;

/* ---------------- COUNTDOWN ---------------- */

function updateCountdown() {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0 && !unlocked) {

        unlocked = true;

        countdown.innerHTML = `
            <div style="margin-top:20px;">
                <div style="font-size:20px; color:#fff;">
                    Your gift is ready ✨
                </div>

                <button id="openMemory" style="
                    margin-top:15px;
                    padding:10px 18px;
                    border:none;
                    border-radius:20px;
                    background:#D4AF37;
                    color:black;
                    cursor:pointer;
                ">
                    Unlock Memory 💌
                </button>

                <div id="memoryGate" style="display:none; margin-top:15px;">
                    
                    <img src="images/jasmin.jpg" style="
                        width:120px;
                        border-radius:15px;
                        margin-top:10px;
                        box-shadow:0 0 20px rgba(255,255,255,0.2);
                    ">

                    <p style="margin-top:10px; color:#E6E6FA;">
                        Happy Birthday to my sweet girl ❤️
                    </p>

                    <p>Answer to unlock memory 🌸</p>

                    <input id="answer" placeholder="Type your answer..." style="
                        padding:10px;
                        border-radius:10px;
                        border:none;
                        outline:none;
                        width:80%;
                    "/>

                    <button id="submitAnswer" style="
                        margin-top:10px;
                        padding:10px 15px;
                        border:none;
                        border-radius:15px;
                        background:#800020;
                        color:white;
                        cursor:pointer;
                    ">
                        Submit
                    </button>

                    <p id="response"></p>

                </div>
            </div>
        `;

        attachEvents();

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

    openMemory.addEventListener("click", () => {
        memoryGate.style.display = "block";
    });

    submit.addEventListener("click", () => {

        const ans = document.getElementById("answer").value.toLowerCase().trim();
        const clean = ans.replace(/\s+/g, " ");

        if (
            clean.includes("17") &&
            (clean.includes("2026") || clean.includes("june") || clean.includes("jun"))
        ) {

            response.innerHTML = "Unlocked ❤️";

            startCinematicReveal();

        } else {
            response.innerHTML = "Not quite 🌿 try again...";
        }
    });
}

/* ---------------- CINEMATIC REVEAL ---------------- */

function startCinematicReveal() {

    document.body.style.background = "#0b0b10";

    document.querySelector(".card").style.transition = "all 1.5s ease";
    document.querySelector(".card").style.opacity = "0";

    setTimeout(() => {

        document.querySelector(".card").innerHTML = `
        
        <div style="text-align:center; animation:fadeIn 2s ease;">

            <h1 style="color:#E6E6FA;">Memory Unlocked 🌸</h1>

            <p style="
                margin-top:20px;
                font-size:18px;
                color:white;
                line-height:1.8;
            ">
                I still remember the day we met.<br><br>
                17th — a moment I can never forget.<br><br>
                Some memories don’t need many words.
            </p>

        </div>

        `;

        document.querySelector(".card").style.opacity = "1";

        startSnowfall();

    }, 1200);
}

/* ---------------- SNOWFALL ---------------- */

function startSnowfall() {

    setInterval(() => {

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

    }, 300);
}
