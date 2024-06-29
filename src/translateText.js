async function translateText() {
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const apiKey = '111923ac03mshf09ff56ee94178ep1ae5c5jsn0327f1d6f865'; 
    
    const textToTranslate = document.getElementById('textToTranslate').value;
    const targetLanguage = document.getElementById('targetLanguage').value;

    let sourceLanguage = '';
    let options;

    options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: new URLSearchParams({
            q: textToTranslate,
            source: sourceLanguage,
            target: targetLanguage
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const translatedText = result.data.translations[0].translatedText;
        
        // Display the translated text on the web page
        document.getElementById('translatedText').innerText = translatedText;
    } catch (error) {
        console.error(error);
    }
}

module.exports = { translateText };