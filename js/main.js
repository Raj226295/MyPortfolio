if (!isMobile) {

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  let lines = [];
  let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  window.addEventListener("mousemove", (e) => {
    pos.x = e.clientX;
    pos.y = e.clientY;
  });

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeCanvas);

  resizeCanvas();
  createLines();
  render();
}
