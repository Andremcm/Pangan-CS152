const textField = document.getElementById('textField');
const calculateBtn = document.getElementById('calculateBtn');
const display = document.getElementById('display');
const emailField = document.getElementById('emailField');
const verifyBtn = document.getElementById('verifyBtn');
const emailDisplay = document.getElementById('emailDisplay');

calculateBtn.onclick = function() {
    const value = textField.value;
    display.textContent = value.length;
};

verifyBtn.onclick = function() {
    const emailValue = emailField.value;
    
    if (emailValue === '') {
        emailDisplay.textContent = '-';
        return;
    }
    
    if (emailValue.includes('@')) {
        emailDisplay.textContent = 'Valid';
    } else {
        emailDisplay.textContent = 'Invalid';
    }
};

textField.onkeydown = function(e) {
    if (e.key === 'Enter') {
        calculateBtn.click();
    }
};

emailField.onkeydown = function(e) {
    if (e.key === 'Enter') {
        verifyBtn.click();
    }
};
