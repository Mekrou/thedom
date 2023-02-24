const v2 = document.querySelector("#v2");

v2.onclick = function() {
    console.log("YOU CLICKED MEEEE");
}

v2.onmouseenter = function() {
    v2.innerText = "DONT DO IT!"
}
v2.onmouseleave = function() {
    v2.innerText = "Click Me! (2nd Version)" ;
}