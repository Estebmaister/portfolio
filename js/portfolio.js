// Get our .nav-link elements
const navElements = document.getElementsByClassName("nav-link");

// Applying the forEach method to our nav elements list
Array.prototype.forEach.call(navElements, function (navElem) {
  // On click, inverse the color (B/W)
  navElem.addEventListener("click", function () {
    // Retrieve our CSS variable "--primary-color"
    const colorRetrieved = getComputedStyle(this)
      .getPropertyValue("--primary-color")
      .trim();

    if (colorRetrieved == "black")
      this.style.setProperty("--primary-color", "white");
    else this.style.setProperty("--primary-color", "black");
  });
});

window.onscroll = function () {
  let _win = this;
  document.querySelectorAll(".toFadeAnim").forEach((element) => {
    let _ths = element,
      _pos = _ths.offsetTop,
      _scroll = _win.pageYOffset,
      _height = _win.screen.height;
    _scroll > _pos - _height * 0.65
      ? _ths.classList.add("fadeIn")
      : _ths.classList.remove("fadeIn");
  });
};
