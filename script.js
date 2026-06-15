const countdown = document.getElementById("countdown");

const targetDate = new Date("June 16, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

        countdown.innerHTML = `
            <div style="font-size:22px;">
                Your gift is ready ✨
            </div>
        `;

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    countdown.innerHTML = `
        ${days} Days<br>
        ${hours} Hours<br>
        ${minutes} Minutes<br>
        ${seconds} Seconds
    `;
}

updateCountdown();

setInterval(updateCountdown, 1000);

const openMemory = document.getElementById("openMemory");
const memoryGate = document.getElementById("memoryGate");
const submitAnswer = document.getElementById("submitAnswer");
const response = document.getElementById("response");

openMemory.addEventListener("click", () => {
    memoryGate.style.display = "block";
});

submitAnswer.addEventListener("click", () => {

    const ans = document.getElementById("answer").value.toLowerCase().trim();

    // simple emotional answer (we'll customize later)
    if(ans === "jasmin" || ans === "cute cat"){

        response.innerHTML = "Unlocked ❤️";

        document.querySelector(".card").innerHTML = `
            <h1>Memory 🌸</h1>
            <p style="margin-top:20px; line-height:1.8;">
                I still remember the first time I saw your eyes.<br><br>
                And that small handshake… it stayed with me.<br><br>
                Some moments don't need many words.
            </p>
        `;

    } else {
        response.innerHTML = "Try again 🌿";
    }

});
