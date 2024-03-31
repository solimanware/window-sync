const boxEl = document.querySelector(".box");
boxEl.addEventListener("mousedown", (e) => {
  let isDragging = true;
  let offsetX = e.offsetX;
  let offsetY = e.offsetY;
  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      localStorage.setItem(
        "boxPosition",
        JSON.stringify({ x: e.clientX - offsetX, y: e.clientY - offsetY })
      );
      boxEl.style.left =
        JSON.parse(localStorage.getItem("boxPosition")).x + "px";
      boxEl.style.top =
        JSON.parse(localStorage.getItem("boxPosition")).y + "px";
    }
  });
  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
});

window.addEventListener("load", () => {
    if (localStorage.getItem("boxPosition")) {
        boxEl.style.left =
        JSON.parse(localStorage.getItem("boxPosition")).x + "px";
        boxEl.style.top =
        JSON.parse(localStorage.getItem("boxPosition")).y + "px";
    }
});

window.addEventListener("storage", () => {
    boxEl.style.left =
    JSON.parse(localStorage.getItem("boxPosition")).x + "px";
    boxEl.style.top =
    JSON.parse(localStorage.getItem("boxPosition")).y + "px";
});