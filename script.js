var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacityRandom = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity: opacityRandom });
}

var frameNumber = 0;
var opacity = 0;

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
    if (button.textContent.includes("Click")) {
        button.textContent = "Tunggu sebentar yaa 🤭✨";
        setTimeout(() => {
            button.textContent = "Udah dibaca belum? 😚🤍";
        }, 2000);
    }
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(28, window.innerWidth / 26);
    var lineHeight = 10;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";

    context.shadowColor = "rgba(100, 150, 255, 1)";
    context.shadowBlur = 10;

    // ====== SETIAP BAGIAN 800 FRAME ======

    let section = Math.floor(frameNumber / 800);
    let localFrame = frameNumber % 800;

    if (localFrame < 200) opacity += 0.005;
    else if (localFrame > 600) opacity -= 0.005;

    context.fillStyle = `rgba(45,45,255,${opacity})`;

    const messages = [
        ["Happy Valentine’s Day, Kaka 🤍✨"],
        ["Sebelumnya aku mau minta maaf buat", "perkataan aku semalam yaa 🥺"],
        ["Aku bener-bener nggak ada niatan", "sedikit pun buat nyakitin hati Kaka 🤍"],
        ["Kalau kata-kataku bikin Kaka sedih,", "aku minta maaf banget yaa 🥹"],
        ["Jujur yaa… aku suka Kaka dari", "segala hal yang Kaka punya 😆🤍"],
        ["Paras Kaka, kepribadian Kaka,", "perhatian kecil yang Kaka kasih… semuanya."],
        ["Kehadiran Kaka di hidupku itu", "berarti banget, nggak bohong 🤍"],
        ["Sejak kenal Kaka, hari-hariku jadi", "lebih hangat dan lebih berwarna ✨"],
        ["Kaka selalu jadi orang yang aku tunggu,", "yang bikin aku senyum sendiri 😚"],
        ["Aku bersyukur banget bisa kenal Kaka,", "bisa cerita, bisa ketawa bareng."],
        ["Semoga hari ini penuh kebahagiaan,", "dan semoga aku boleh terus di samping Kaka 🤍"],
        ["Terima kasih sudah jadi seseorang", "yang begitu berarti buat aku ❤️"],
        ["Dan sekali lagi… maaf ya, Kaka 🤍🥺"],
        ["Happy Valentine’s Day 💖", "I really, really like you xixi 🤭✨"]
    ];

    if (section < messages.length) {
        drawTextWithLineBreaks(
            messages[section],
            canvas.width / 2,
            canvas.height / 2,
            fontSize,
            lineHeight
        );
    }

    if (section >= messages.length - 1 && localFrame > 700) {
        button.style.display = "block";
    }
}

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle =
            "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawStars();
    updateStars();
    drawText();

    frameNumber++;
    requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
