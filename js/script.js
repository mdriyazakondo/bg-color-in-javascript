const clickBtn = document.getElementById("click-btn");
const BgColor = document.getElementById("bg-color");
const bg = document.getElementById("bg");

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

clickBtn.addEventListener("click", (e) => {
  const styleTextColor = colorGanarator();
  const styleBgColor = bgColorGanarator();
  document.body.style.backgroundColor = styleBgColor;
  BgColor.innerText = styleBgColor;
  bg.style.color = styleTextColor;
  navigator.clipboard.writeText(styleBgColor);
});
