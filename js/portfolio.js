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
