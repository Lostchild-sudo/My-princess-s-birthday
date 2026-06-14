const targetDate = new Date("June 16, 2026 00:00:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {

        clearInterval(timer);

        document.getElementById("message").innerHTML =
            "🎁 Your birthday surprise is awake now, my cute cat ❤️";

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
