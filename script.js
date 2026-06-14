const targetDate = new Date("June 14, 2026 00:00:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {

        clearInterval(timer);

        document.getElementById("message").innerHTML =
            "🎉 Happy Birthday My Cute Cat Jasmin ❤️";

        document.getElementById("countdown").innerHTML =
            '<button id="openGift">Open Your Gift ✨</button>';

    } else {

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
        );

        const seconds = Math.floor(
            (distance % (1000 * 60)) / 1000
        );

        document.getElementById("countdown").innerHTML =
            `${days} Days<br>${hours} Hours<br>${minutes} Minutes<br>${seconds} Seconds`;
    }

}, 1000);


// Open gift button
document.addEventListener("click", function(event) {

    if (event.target.id === "openGift") {

        document.querySelector(".container").innerHTML = `

            <h1>🎁 For My Cute Cat Jasmin ❤️</h1>

            <div class="gift-box" id="giftBox">🎁</div>

            <p>
                Tap the gift box to open your surprise ✨
            </p>

        `;
    }

});


// Open the gift box
document.addEventListener("click", function(event) {

    if (event.target.id === "giftBox") {

        document.querySelector(".container").innerHTML = `

            <h1>Happy Birthday My Cute Cat Jasmin 🐱❤️</h1>

            <p class="letter">

            My precious baby girl,<br><br>

            Happy Birthday ❤️<br><br>

            Even though we have met only once, that moment became very special to me.<br><br>

            I still remember looking into your beautiful eyes for the first time.<br><br>

            And I still remember our first handshake and how happy I felt in that moment.<br><br>

            Thank you for being part of my life.<br><br>

            I hope this birthday brings you happiness, smiles, and lots of love.<br><br>

            Please always take care of yourself, eat properly, and keep smiling.<br><br>

            — From your silly human ❤️

            </p>

        `;
    }

});

// Falling hearts
setInterval(() => {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);

}, 500);
