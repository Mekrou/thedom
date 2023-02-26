const input = document.querySelector('input');

input.addEventListener('keydown', (event) => {
    console.log(`You pressed: ${event.key}`);
});