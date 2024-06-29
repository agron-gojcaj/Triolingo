window.addEventListener('scroll', function() {
    var section1 = document.getElementById('section1');
    if (window.scrollY > section1.offsetHeight) {
        section1.classList.add('scrolled');
    } else {
        section1.classList.remove('scrolled');
    }
});
