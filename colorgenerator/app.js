const h1 = document.querySelector('h1');
const button = document.querySelector('#generator button');


button.addEventListener('click', () => {
    const randomRGB = [];
    for (let i = 0; i < 3; i++) {
        randomRGB.push(getRandomInt(0, 256));
    }

    const rgb = `rgb(${randomRGB[0]},${randomRGB[1]}, ${randomRGB[2]})`
    document.body.style.backgroundColor = rgb;
    h1.innerText = rgb;
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  