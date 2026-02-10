const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function runCode() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  try {
    const userCode = document.getElementById("codeBox").value;
    eval(userCode);
  } catch (err) {
    alert("⚠️ Error in code. Please check.");
  }
}

/* 🌈 DEFAULT COLORFUL VISUAL (AUTO LOAD) */
window.onload = () => {
  for (let i = 0; i < 40; i++) {
    ctx.beginPath();
    ctx.strokeStyle = `hsl(${i * 9}, 100%, 60%)`;
    ctx.lineWidth = 4;
    ctx.arc(200, 200, i * 5, 0, Math.PI * 2);
    ctx.stroke();
  }

  for (let i = 0; i < 120; i++) {
    ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    ctx.fillRect(
      Math.random() * 400,
      Math.random() * 400,
      6,
      6
    );
  }
};
