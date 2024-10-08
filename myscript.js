function appendToInput(value) {
    const textBox = document.getElementById('textBox');
    textBox.value += value;
}

function calculateResult() {
    const textBox = document.getElementById('textBox');
    try {
        textBox.value = eval(textBox.value);
    } catch (error) {
        textBox.value = 'Error';
    }
}

function clearInput() {
    const textBox = document.getElementById('textBox');
    textBox.value = '';
}