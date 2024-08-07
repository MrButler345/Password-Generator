function generatePassword() {
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    const length = parseInt(document.getElementById('lengthRange').value);

    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characters = lower;
    if (includeUppercase) characters += upper;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('passwordOutput').value = password;
}

function updateLengthDisplay() {
    const length = document.getElementById('lengthRange').value;
    document.getElementById('lengthDisplay').innerText = length;
}

function copyToClipboard() {
    const passwordField = document.getElementById('passwordOutput');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999);

    try {
        document.execCommand('copy');
    } catch (err) {
        console.error('Failed to copy password', err);
    }
}
