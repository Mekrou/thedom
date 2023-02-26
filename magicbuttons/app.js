const allButtons = document.querySelectorAll('button');

for (let button of allButtons)
{
    button.addEventListener('click', () => {
        colorizeBackgroundColor(button);
    });
}

const allH1 = document.querySelectorAll('h1');

for (let h1 of allH1)
{
    h1.addEventListener('click', () => {
        colorizeBackgroundColor(h1);
    })
}

function randRGBColor() {
    return `rgb(${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${getRandomInt(0, 255)})`;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function colorizeBackgroundColor(el) {
    el.style.backgroundColor = randRGBColor();
    el.style.color = randRGBColor();
}

// a more stream-lined approach:
function colorizeBG() {
    this.style.backgroundColor = randRGBColor();
    this.style.color = randRGBColor();
}