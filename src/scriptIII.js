document.addEventListener("DOMContentLoaded", function () {
  var options = {
    strings: ["Welcome!", "欢迎", "مرحباً", "환영","bienvenida", "mirëseardhje", "benvenuta", "ยินดีต้อนรับ", "Bienvenue", "Welcome to Triolingo!"],
    typeSpeed: 100,
    backSpeed: 120,
    startDelay: 100,
    backDelay: 100,
    cursorChar: "|", // Customize the cursor character
    onComplete: function (self) {
      self.start();
    },
  };

  var typed = new Typed("#animated-title", options); // Targeting the span inside the title-container
});
