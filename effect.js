  const snowCount = 60;

  for (let i = 0; i < snowCount; i++) {
    const snow = document.createElement("div");
    snow.className = "snowflake";

    const size = Math.random() * 5 + 2;
    snow.style.width = size + "px";
    snow.style.height = size + "px";

    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.animationDuration =
      Math.random() * 5 + 5 + "s, " +
      (Math.random() * 3 + 2) + "s";

    snow.style.opacity = Math.random();

    document.body.appendChild(snow);
  }