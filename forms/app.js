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