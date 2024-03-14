document.addEventListener("DOMContentLoaded", function () {
  var targetElements = document.querySelectorAll(".header-nav-wrapper > nav > div");

  targetElements.forEach(function (targetElement) {
    var img = document.createElement("img");
    img.src =
      "https://images.squarespace-cdn.com/content/65c27dd45537d734bb9a0c4e/73179aaa-97bd-422a-a9d1-5243835f9a45/turtle.jpg?content-type=image%2Fjpeg";
    img.style.position = "absolute";
    img.style.top = "0";
    img.style.left = "0";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.zIndex = "-1";
    img.style.objectFit = "cover";
    img.classList.add("background-image");

    targetElement.style.position = "relative";
    targetElement.style.overflow = "hidden";

    targetElement.insertBefore(img, targetElement.firstChild);

    img.addEventListener("mouseenter", function () {
      this.style.animation = "jiggle 0.3s ease-in-out";
    });

    img.addEventListener("mouseleave", function () {
      this.style.animation = "none";
    });
  });
});
