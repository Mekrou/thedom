const allButtons = document.querySelectorAll('button');

for (let button of allButtons)
{
    button.addEventListener('click', () => {
        button.style.backgroundColor = randRGBColor();
    });
}

function randRGBColor() {
    return `rgb(${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${getRandomInt(0, 255)})`;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}