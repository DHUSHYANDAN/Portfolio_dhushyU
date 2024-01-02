document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("animated-text");

    // Options for the Intersection Observer
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    };

    // Callback function for the Intersection Observer
    const callback = function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          textElement.classList.add("animate-typewriter");
          textElement.style.animationDuration = (textElement.textContent.length * 0.01) + "s";
          observer.unobserve(entry.target);
        }
      });
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(callback, options);

    // Observe the target element
    observer.observe(textElement);

    textElement.addEventListener("animationiteration", function() {
        // Remove the animation class after the animation is complete
        textElement.classList.remove("animate-typewriter");
      });
  });

//image animate
document.addEventListener("DOMContentLoaded", function() {
    const imageElement = document.getElementById("animated-image");

    // Options for the Intersection Observer
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    };

    // Callback function for the Intersection Observer
    const callback = function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          imageElement.classList.add("animate-image");
          observer.unobserve(entry.target);
        }
      });
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(callback, options);

    // Observe the target element
    observer.observe(imageElement);
  });



// image from right

document.addEventListener("DOMContentLoaded", function() {
    const sectionElement = document.getElementById("custom-animated-section");

    // Options for the Intersection Observer
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    };

    // Callback function for the Intersection Observer
    const callback = function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          sectionElement.classList.add("animate-section");
          observer.unobserve(entry.target);
        }
      });
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(callback, options);

    // Observe the target element
    observer.observe(sectionElement);
  });