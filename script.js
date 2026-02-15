function drawText() {
    var fontSize = Math.min(22, window.innerWidth / 26);
    var lineHeight = 10;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";

    context.fillStyle = "rgb(255,105,180)";
    context.shadowColor = "rgba(255,105,180,0.8)";
    context.shadowBlur = 8;

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

    // 
    let framePerLine = 25; 
    let index = Math.floor(frameNumber / framePerLine);

    if (index >= fullMessage.length) {
        index = fullMessage.length - 1;
    }

    let start = Math.max(0, index - 3);
    let end = index + 1;

    for (let i = start; i < end; i++) {
        context.fillText(
            fullMessage[i],
            canvas.width / 2,
            canvas.height / 2 + (i - start) * (fontSize + lineHeight)
        );
    }
}
