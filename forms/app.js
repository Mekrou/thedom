const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const catList = document.querySelector('.catList');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // create our to-be-appended cat
    let cat = document.createElement('div');
    cat.innerText = input.value;

    // append new cat
    catList.append(cat);

    // clear form
    input.value = "";
})

// Change Event Demonstration:

const change_input = document.querySelector('#input');
const changeHeader = document.querySelector('#change');

change_input.addEventListener('change', function (e) {
    console.log('change event ran!');
    console.log(e);
    changeHeader.innerText = e.target.value;
})

change_input.addEventListener('input', function (e) {
    changeHeader.innerText = e.data;
})