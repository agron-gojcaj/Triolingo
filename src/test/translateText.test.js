const { enableFetchMocks } = require('jest-fetch-mock');
enableFetchMocks();

beforeEach(() => {
  fetch.resetMocks();
  // Mocking document.getElementById to return an object with a value or checked property
  document.getElementById = jest.fn((id) => {
    if (id === 'textToTranslate') return { value: 'Hello' };
    if (id === 'targetLanguage') return { value: 'es' };
    if (id === 'autoDetect') return { checked: false };
    if (id === 'translatedText') return { innerText: 'Hola' };
  });
});

test('translateText successfully translates text', async () => {
  // Mock the fetch response
  fetch.mockResponseOnce(JSON.stringify({
    data: {
      translations: [{ translatedText: 'Hola', detectedSourceLanguage: 'en' }]
    }
  }));

  const { translateText } = require('./../translateText.js');
  await translateText();
  // Assertions
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    'https://google-translate1.p.rapidapi.com/language/translate/v2', 
    expect.objectContaining({
      method: 'POST',
      headers: expect.any(Object),
      body: expect.any(URLSearchParams)
    })
  );

  // Check if the translated text was correctly displayed
  const translatedTextElement = document.getElementById('translatedText');
  expect(translatedTextElement.innerText).toBe('Hola');
});
