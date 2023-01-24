const banner = document.getElementById('banner');

const toc = document.getElementById('toc');

toc.style.color = 'red';

const images = document.getElementsByTagName('img');

// you've been hacked, by the lizard-god.
// for (let img of images) {
//     img.src = 'https://static01.nyt.com/images/2022/02/17/science/17tb-lizard-tails-video/17tb-lizard-tails-video-videoSixteenByNine3000.jpg';
// }

// lizard god was feeling nice today.
// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://static01.nyt.com/images/2022/02/17/science/17tb-lizard-tails-video/17tb-lizard-tails-video-videoSixteenByNine3000.jpg';
// }

const firstParagraph = document.querySelector('p');
// firstParagraph.innerText = 'lolololol'; 

const h1 = document.querySelector('h1');
console.log(h1.innerText);

// inner text vs inner html
console.log(firstParagraph.innerText);
console.log(firstParagraph.innerHTML);

// will not return '<h1> Silky Chickens <\h1>', but 'Silky Chickens';
console.log(h1.innerHTML);

firstParagraph.innerHTML += '<b> I was created in JS!';

// Selecting & Manipulating element's attributes
// const image = document.querySelector('#banner');
// image.src = "www.thisdoesntexist.com";

const firstLink = document.querySelector('a');
console.log(firstLink.href);
console.log(firstLink.getAttribute('href'));

firstLink.setAttribute('href', 'https://www.google.com');