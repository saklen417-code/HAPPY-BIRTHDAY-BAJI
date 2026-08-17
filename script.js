/* =========================================
   ELEMENTS
========================================= */

const loadingScreen =
    document.getElementById("loadingScreen");

const welcomeScreen =
    document.getElementById("welcomeScreen");

const mainContent =
    document.getElementById("mainContent");

const openButton =
    document.getElementById("openButton");

const wishButton =
    document.getElementById("wishButton");

const wishMessage =
    document.getElementById("wishMessage");

const birthdayMusic =
    document.getElementById("birthdayMusic");

const confetti =
    document.getElementById("confetti");


/* =========================================
   LOADING
========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        loadingScreen.classList.add("hidden");

        welcomeScreen.classList.remove("hidden");

    }, 3200);

});


/* =========================================
   OPEN SURPRISE
========================================= */

openButton.addEventListener("click", async () => {

    welcomeScreen.classList.add("hidden");

    mainContent.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    /* MUSIC */

    try {

        birthdayMusic.currentTime = 0;

        await birthdayMusic.play();

    } catch (error) {

        console.log(
            "Music start nahi ho saka:",
            error
        );

    }


    /* CONFETTI */

    createConfetti(180);

});


/* =========================================
   WISH
========================================= */

wishButton.addEventListener("click", () => {

    wishMessage.classList.remove("hidden");

    wishButton.innerHTML =
        "Wish Made ♥";

    wishButton.disabled = true;

    createConfetti(100);

});


/* =========================================
   CONFETTI
========================================= */

function createConfetti(amount) {

    const symbols = [
        "♥",
        "♡",
        "✦",
        "✧",
        "●",
        "◆"
    ];

    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add(
            "confetti-piece"
        );

        piece.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.fontSize =
            Math.random() * 10 + 8 + "px";

        piece.style.color =
            randomPink();

        piece.style.animationDuration =
            Math.random() * 3 + 3 + "s";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        confetti.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 7000);

    }

}


/* =========================================
   PINK COLORS
========================================= */

function randomPink() {

    const colors = [

        "#c9406b",
        "#ca4770",
        "#e66f94",
        "#f08bab",
        "#b93660",
        "#d85c80"

    ];

    return colors[
        Math.floor(
            Math.random() * colors.length
        )
    ];

}


/* =========================================
   MUSIC ERROR
========================================= */

birthdayMusic.addEventListener(
    "error",
    () => {

        console.log(
            "birthday2.mp3 file nahi mili."
        );

    }
);