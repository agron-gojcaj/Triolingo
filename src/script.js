document.addEventListener("DOMContentLoaded", function () {
  var options = {
    strings: ["Triolingo", "Welcome!", "Are you ready to learn?"],
    typeSpeed: 100,
    backSpeed: 100,
    startDelay: 100,
    backDelay: 1800,
    cursorChar: "|", // Customize the cursor character
    onComplete: function (self) {
      self.start();
    },
  };

  var typed = new Typed("#animated-title", options);
});
