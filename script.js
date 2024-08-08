
function generateHexColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.querySelector('.color-box').style.backgroundColor = randomColor;
    document.querySelector('.color-code').textContent = randomColor;
}     