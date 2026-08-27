const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight;
let fontSize = 16;
let columns = Math.floor(width / fontSize);
let drops = [];

const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function setupMatrix() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    columns = Math.floor(width / fontSize);
    drops = Array(columns).fill(0).map(() => Math.random() * -100);
}

function drawMatrix() {
    ctx.fillStyle = "rgba(6, 17, 31, 0.08)";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "rgba(56, 189, 248, 0.5)";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.985) {
            drops[i] = Math.random() * -20;
        }

        drops[i] += 1;
    }
}

function animateMatrix() {
    drawMatrix();
    requestAnimationFrame(animateMatrix);
}

window.addEventListener("resize", setupMatrix);

setupMatrix();
animateMatrix();