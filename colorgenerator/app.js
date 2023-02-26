const h1 = document.querySelector('h1');
const button = document.querySelector('#generator button');


button.addEventListener('click', () => {
    
    const h1 = document.querySelector('h1');
    // Just in case we changed it to white previously.
    h1.style.color = 'black';
    const randomRGB = [];
    // For if the color is too dark, we need to change text color
    let sumOfColors = 0;
    const darkThreshold = 150;
    for (let i = 0; i < 3; i++) {
        randomRGB.push(getRandomInt(0, 256));
        sumOfColors += randomRGB[i];
    }
    

    // If background color generated is too dark, change text so we can see it.
    if (sumOfColors < darkThreshold)
    {
        h1.style.color = "white";
        // reset for next run
        sumOfColors = 0;
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
  