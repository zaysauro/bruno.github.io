const buttons = document.querySelectorAll(".app-btn");
const frame = document.getElementById("appFrame");
const readme = document.getElementById("appReadme");

const appData = {
  calculator: {
    src: "apps/calculator/index.html",
    title: "Calculator",
    desc: "A focused calculator app built to explore UI feedback, keyboard input and internal state handling."
  },
  pomodoro: {
    src: "apps/pomodoro/index.html",
    title: "Pomodoro Timer",
    desc: "A simple pomodoro timer focused on state transitions, timing accuracy and UX clarity."
  },
  qrcode: {
    src: "apps/qrcode/index.html",
    title: "QR Code Generator",
    desc: "Generate QR codes in real time using Canvas and modern browser APIs."
  },
  typing: {
    src: "apps/typing/index.html",
    title: "Typing Speed Game",
    desc: "A typing game to measure WPM and accuracy while exploring event timing and performance."
  }
};

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const key = btn.dataset.app;
    frame.src = appData[key].src;

    readme.innerHTML = `
      <h2>${appData[key].title}</h2>
      <p>${appData[key].desc}</p>
    `;
  });
});
