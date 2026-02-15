window.onload = function () {

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var frameNumber = 0;

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        drawHearts();
        drawText();
        drawBunny();

        frameNumber++;
        requestAnimationFrame(draw);
    }

    draw();

    // ================= TEXT =================
    function drawText() {

        var fontSize = Math.min(22, window.innerWidth / 25);
        var lineHeight = 8;

        context.font = fontSize + "px Comic Sans MS";
        context.textAlign = "center";
        context.fillStyle = "white";
        context.shadowColor = "rgba(255,20,147,0.8)";
        context.shadowBlur = 10;

        const fullMessage = [
            "Happy Valentine’s Day, Kaka 🤍",
            "",
            "Sebelumnya aku mau minta maaf buat perkataan aku semalam.",
            "Aku bener-bener nggak ada niatan sedikit pun buat nyakitin hati Kaka.",
            "Kalau kata-kataku bikin Kaka sedih atau kepikiran,",
            "aku minta maaf sekali lagi… maaf banget.",
            "",
            "Jujur, aku suka Kaka dari segala hal yang Kaka punya",
            "kaya paras Kaka, kepribadian Kaka, perhatian yang Kaka kasih,",
            "cara Kaka memperlakukan aku, dan semua hal kecil",
            "yang membuat Kaka jadi diri Kaka. Intinya… all about you.",
            "",
            "Kehadiran Kaka di hidupku itu berarti banget.",
            "Sejak kenal Kaka, hari-hariku terasa lebih hangat,",
            "lebih tenang, dan lebih berwarna.",
            "",
            "Kaka selalu jadi seseorang yang aku tunggu,",
            "seseorang yang bikin aku merasa dihargai",
            "dan punya tempat untuk pulang.",
            "",
            "Aku bersyukur bisa mengenal Kaka, bisa berbagi cerita,",
            "tertawa bareng, dan melewati hari-hari dengan Kaka di dalamnya.",
            "",
            "Semoga hari ini membawa kebahagiaan untuk Kaka,",
            "dan semoga aku masih boleh terus ada di samping Kaka",
            "untuk waktu yang lama.",
            "",
            "Happy Valentine’s Day, Kaka ❤️",
            "Terima kasih sudah jadi seseorang",
            "yang begitu berarti buat aku.",
            "",
            "Dan sekali lagi… maaf ya, Kaka 🤍"
        ];

        // 🔥 5 DETIK PER KALIMAT
        let framePerLine = 300;

        let currentIndex = Math.floor(frameNumber / framePerLine);

        if (currentIndex >= fullMessage.length) {
            currentIndex = fullMessage.length - 1;
        }

        let start = Math.max(0, currentIndex - 3);
        let yStart = canvas.height / 2;

        for (let i = start; i <= currentIndex; i++) {
            context.fillText(
                fullMessage[i],
                canvas.width / 2,
                yStart + (i - start) * (fontSize + lineHeight)
            );
        }
    }

    // ================= HEARTS =================
    function drawHearts() {
        drawHeart(
            canvas.width / 4,
            canvas.height / 4 + Math.sin(frameNumber * 0.05) * 10,
            40
        );

        drawHeart(
            canvas.width * 0.8,
            canvas.height / 3 + Math.sin(frameNumber * 0.05) * 10,
            30
        );
    }

    function drawHeart(x, y, size) {
        context.save();
        context.beginPath();

        context.moveTo(x, y);
        context.bezierCurveTo(
            x - size / 2, y - size / 2,
            x - size, y + size / 3,
            x, y + size
        );

        context.bezierCurveTo(
            x + size, y + size / 3,
            x + size / 2, y - size / 2,
            x, y
        );

        context.fillStyle = "pink";
        context.shadowColor = "rgba(255,20,147,0.8)";
        context.shadowBlur = 15;
        context.fill();
        context.restore();
    }

    // ================= BUNNY =================
    function drawBunny() {
        let x = canvas.width / 2;
        let y = canvas.height - 120;
        let size = 80;

        context.save();

        // head
        context.beginPath();
        context.arc(x, y, size / 2, 0, Math.PI * 2);
        context.fillStyle = "white";
        context.fill();

        // ears
        context.beginPath();
        context.ellipse(x - size / 4, y - size / 1.2,
            size / 6, size / 2, 0, 0, Math.PI * 2);
        context.fill();

        context.beginPath();
        context.ellipse(x + size / 4, y - size / 1.2,
            size / 6, size / 2, 0, 0, Math.PI * 2);
        context.fill();

        // eyes
        context.fillStyle = "black";
        context.beginPath();
        context.arc(x - size / 6, y - size / 8, 3, 0, Math.PI * 2);
        context.arc(x + size / 6, y - size / 8, 3, 0, Math.PI * 2);
        context.fill();

        // nose
        context.fillStyle = "pink";
        context.beginPath();
        context.arc(x, y + size / 8, 4, 0, Math.PI * 2);
        context.fill();

        // blush
        context.fillStyle = "rgba(255,182,193,0.8)";
        context.beginPath();
        context.arc(x - size / 3, y + size / 8, 6, 0, Math.PI * 2);
        context.arc(x + size / 3, y + size / 8, 6, 0, Math.PI * 2);
        context.fill();

        context.restore();
    }

};
