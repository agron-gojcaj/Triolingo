async function checkTranslation() {
    const userTranslation = document.getElementById('textToTranslate').value.trim();
    if (userTranslation === '') {
        alert('Please enter your translation.');
        return;
    }
    
    const correctTranslation = "Hello, how are you?";
    const userTranslationLowerCase = userTranslation.toLowerCase();
    const correctTranslationLowerCase = correctTranslation.toLowerCase();
    
    if (userTranslationLowerCase === correctTranslationLowerCase) {
        alert('Correct! Well done.');
        document.getElementById('completeButton').disabled = false;
        document.getElementById('error').style.display = 'none'; // Hide error message if correct
    } else {
        document.getElementById('error').style.display = 'block'; // Show error message if incorrect
    }
}

function completeLesson() {
    // Redirect to Lesson 2
    window.location.href = 'lesson2.html';
}

function displayHint() {
    document.getElementById('hint').style.display = 'block';
}

module.exports = { checkTranslation, completeLesson, displayHint };