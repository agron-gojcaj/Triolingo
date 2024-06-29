// Update progress percentage for each language module
function updateProgress(lessonCompleted, totalLessons, progressTextId) {
    var progress = Math.round((lessonCompleted / totalLessons) * 100);
    document.getElementById(progressTextId).innerText = progress + "%";
}

// Call updateProgress function for each language module
updateProgress(0, 22, "progressText1");
// Add similar calls for other language modules
