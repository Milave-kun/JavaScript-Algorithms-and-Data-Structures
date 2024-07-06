document.getElementById('check-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');

    if (inputText === '') {
        alert('Please input a value');
        return;
    }

    const cleanedText = inputText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');

    if (cleanedText === reversedText) {
        resultElement.textContent = `${inputText} is a palindrome`;
    } else {
        resultElement.textContent = `${inputText} is not a palindrome`;
    }
});
