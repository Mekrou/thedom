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

const everyAnchorTag = document.querySelectorAll('a');

for (let link of everyAnchorTag) {
    link.style.color = "red";
    link.style.textDecorationStyle = 'wavy';
}

// Let's use the window.getComputedStyle() method to change our all our link text to be the same size of the h1.
const h1fontSize = window.getComputedStyle(h1).fontSize;

for (let link of everyAnchorTag) {
    link.style.fontSize = h1fontSize;
}

const h2 = document.querySelector('h2');

h2.classList.add('border');

h2.classList.contains('border');

h2.classList.toggle('border');
h2.classList.toggle('highlight');
// highlight class does not exist; it is added to h2's classList

// Every element has one and only one parent, but can have multiple children

console.log(h2.parentElement);

// Children return an HTMLCollection lists of an element's children
console.log(h2.children);

console.log(h2.nextSibling);
// returns the element or node (#text if whitespace or a return character)
// after the element.

console.log(h2.nextElementSibling);
// returns the next element after the element.

// These also have previousSibling and previousElementSibling counterparts.

// Creating and Appending Elements

const img = document.createElement('img');
img.src = 'https://images.unsplash.com/photo-1604917018135-18fe420b2ce4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

document.body.appendChild(img);
img.setAttribute('class', 'square');

const historyHeading = document.querySelector('#History');
historyHeading.append(' of the Silky Chicken');

firstParagraph.prepend('(A/Any article works here - Steritz) ');

// insertAdjacentElement()
const myEl = document.createElement('myEl')
myEl.innerText = 'Between first h1 and chicken IMG!'
h1.insertAdjacentElement('afterend', myEl);

// Does the exact same thing as the above, but obviously less flexible!
// h1.after(myEl);
// there's also
// h1.before(element);