const banner = document.getElementById('banner');

const toc = document.getElementById('toc');

toc.style.color = 'red';

const images = document.getElementsByTagName('img');

// you've been hacked, by the lizard-god.
for (let img of images) {
    img.src = 'https://static01.nyt.com/images/2022/02/17/science/17tb-lizard-tails-video/17tb-lizard-tails-video-videoSixteenByNine3000.jpg';
}