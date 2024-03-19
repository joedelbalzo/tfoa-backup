const imageSources = [
  "https://i.ibb.co/RjqygNH/Harley-shell-1.webp",
  "https://i.ibb.co/gyfd6rq/Harley-shell-2.webp",
  "https://i.ibb.co/5KKywV3/Harley-shell-3l.webp",
];

document.addEventListener("DOMContentLoaded", function () {
  const targetElements = document.querySelectorAll(".header-nav-wrapper > nav > div");
  targetElements.forEach(function (targetElement) {
    const img = document.createElement("img");
    if (targetElement == targetElements[0]) {
      img.src = imageSources[0];
    }
    if (targetElement == targetElements[1]) {
      img.src = imageSources[1];
    }
    if (targetElement == targetElements[2]) {
      img.src = imageSources[2];
    }
    img.style.position = "absolute";
    /* img.style.top = '0';
    img.style.left = '0'; */
    img.style.width = "95%";
    img.style.height = "160px";
    img.style.filter = "drop-shadow(3px 3px 3px rgba(90,90,90,0.2))";
    img.style.zIndex = "-1";
    img.style.objectFit = "contain";

    targetElement.style.position = "relative";
    targetElement.style.overflow = "hidden";

    targetElement.insertBefore(img, targetElement.firstChild);

    targetElement.addEventListener("mouseenter", function () {
      img.classList.add("jiggle");
    });
    targetElement.addEventListener("mouseleave", function () {
      img.classList.remove("jiggle");
    });
  });
});
