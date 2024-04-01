const boxEl = document.querySelector(".box");
const channel = new BroadcastChannel("box-position-channel");
channel.onmessage = ({ data: { x, y } }) => {
  boxEl.style.left = x + "px";
  boxEl.style.top = y + "px";
};
boxEl.addEventListener("mousedown", (e) => {
  let isDragging = true;
  window.addEventListener("mouseup", () => {
    isDragging = false;
  });
  window.addEventListener("mousemove", (e) => {
    if (isDragging) {
      channel.postMessage({ x: e.clientX -50, y: e.clientY -50});
      boxEl.style.left = e.clientX -50 + "px";
      boxEl.style.top = e.clientY -50 + "px";
    }
  });
});
