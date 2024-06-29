describe('checkTranslation function', () => {
    // Mocking the global alert function
    global.alert = jest.fn();
  
    // Helper function to set up the DOM
    function setupDOM() {
      document.body.innerHTML = `
        <input type="text" id="textToTranslate">
        <span id="error" style="color: red; display: none;">Incorrect translation. Please try again.</span>
        <button id="completeButton" disabled>Complete Lesson</button>
      `;
  
      global.checkTranslation = async function() {
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
            document.getElementById('error').style.display = 'none';
        } else {
            document.getElementById('error').style.display = 'block';
        }
      };
    }
  
    beforeEach(() => {
      setupDOM();
    });
  
    test('alerts the user to enter a translation if input is empty', async () => {
      document.getElementById('textToTranslate').value = '';
      await global.checkTranslation();
      expect(global.alert).toHaveBeenCalledWith('Please enter your translation.');
    });
  
    test('displays an error for incorrect translation', async () => {
      document.getElementById('textToTranslate').value = 'Wrong answer';
      await global.checkTranslation();
      expect(document.getElementById('error').style.display).toBe('block');
      expect(global.alert).not.toHaveBeenCalledWith('Correct! Well done.');
    });
  
    test('alerts correct answer and enables the complete button for correct translation', async () => {
      document.getElementById('textToTranslate').value = 'Hello, how are you?';
      await global.checkTranslation();
      expect(global.alert).toHaveBeenCalledWith('Correct! Well done.');
      expect(document.getElementById('completeButton').disabled).toBe(false);
      expect(document.getElementById('error').style.display).toBe('none');
    });
  });
  