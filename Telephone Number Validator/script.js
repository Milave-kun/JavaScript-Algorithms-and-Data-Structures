document.addEventListener('DOMContentLoaded', function() {
    const checkBtn = document.getElementById('check-btn');
    const clearBtn = document.getElementById('clear-btn');
    const userInput = document.getElementById('user-input');
    const resultsDiv = document.getElementById('results-div');
  
    checkBtn.addEventListener('click', function() {
      const phoneNumber = userInput.value.trim();
      if (!phoneNumber) {
        alert('Please provide a phone number');
        return;
      }
      const result = validatePhoneNumber(phoneNumber);
      resultsDiv.textContent = result;
    });
  
    clearBtn.addEventListener('click', function() {
      resultsDiv.textContent = '';
      userInput.value = '';
    });
  
    function validatePhoneNumber(number) {
      const validPatterns = [
        /^1?\s?\d{3}-\d{3}-\d{4}$/,          // 1 555-555-5555 or 555-555-5555
        /^1?\s?\(\d{3}\)\s?\d{3}-\d{4}$/,    // 1 (555) 555-5555 or (555) 555-5555
        /^1?\s?\d{3}\s\d{3}\s\d{4}$/,        // 1 555 555 5555 or 555 555 5555
        /^1?\s?\(\d{3}\)\d{3}-\d{4}$/,       // 1(555)555-5555 or (555)555-5555
        /^1?\d{10}$/                         // 15555555555 or 5555555555
      ];
      if (validPatterns.some(pattern => pattern.test(number))) {
        return `Valid US number: ${number}`;
      } else {
        return `Invalid US number: ${number}`;
      }
    }
  });
  