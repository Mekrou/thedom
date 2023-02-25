const v2 = document.querySelector("#v2");

v2.onclick = function() {
    console.log("YOU CLICKED MEEEE");
}

v2.onmouseenter = function() {
    v2.innerText = "I HAVE 3 BEAUTIFUL CHILDREN!"
}
v2.onmouseleave = function() {
    v2.innerText = "Click Me! (2nd Version)" ;
}

const v3 = document.querySelector('#v3');

v3.addEventListener('mouseover', () => {
    v3.style.backgroundColor = 'pink';
})
v3.addEventListener('mouseout', () => {
    v3.style.backgroundColor = '';
})