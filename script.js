const targetDate = new Date("June 16, 2026 00:00:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {

        clearInterval(timer);

        document.getElementById("message").innerHTML =
            "🎉 Happy Birthday My Cute Cat Jasmin ❤️";

        document.getElementById("countdown").innerHTML =
            '<button id="openGift">Open Your Gift ✨</button>';

        document.addEventListener("click", function(event){

            if(event.target.id === "openGift"){

                document.querySelector(".container").innerHTML = `

                    <h1>🎁 For My Cute Cat Jasmin ❤️</h1>

                    <div class="gift-box">🎁</div>

                    <p>
                    Tap the gift box to open your surprise ✨
                    </p>

                `;
            }
        });

    } else {

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
            `${days} Days<br>${hours} Hours<br>${minutes} Minutes<br>${seconds} Seconds`;
    }

}, 1000);
