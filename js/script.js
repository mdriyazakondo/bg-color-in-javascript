const clickBtn = document.getElementById("click-btn");
const BgColor = document.getElementById("bg-color");
const bg = document.getElementById("bg");
const text = document.createElement("h3");

const colorGanarator = () => {
  const red = Math.floor(Math.random() * 100 * 20);
  const blue = Math.floor(Math.random() * 100 * 20);
  const green = Math.floor(Math.random() * 100 * 20);
  return `rgba(${red},${blue},${green})`;
};
const bgColorGanarator = () => {
  const red = Math.floor(Math.random() * 100);
  const blue = Math.floor(Math.random() * 100);
  const green = Math.floor(Math.random() * 100);
  return `rgba(${red},${blue},${green})`;
};

BgColor.innerText = bgColorGanarator();
// BgColor.style.color = "rgba(0,96,80)";
clickBtn.addEventListener("click", (e) => {
  const styleTextColor = colorGanarator();
  const styleBgColor = bgColorGanarator();
  document.body.style.backgroundColor = styleBgColor;
  BgColor.innerText = styleBgColor;
  bg.style.color = styleTextColor;

  navigator.clipboard
    .writeText(styleBgColor)
    .then(() => {
      if (clickBtn !== "click") {
        text.classList.add("text");
      }
      document.body.appendChild(text);
      text.innerText = `Copy background Color : ${styleBgColor}`;
      // text.style.color = styleTextColor;

      setTimeout(() => {
        text.innerText = "";
      }, 400);
    })
    .catch((err) => {
      console.error(err.message);
    });
});
