let circle = document.querySelector(".circle");

circle.addEventListener("mousedown", onDown);

function onDown(e) {
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
}

function onMove(e) {
    circle.style.left = e.clientX - (circle.offsetWidth / 2)+ "px";
    circle.style.top = e.clientY - (circle.offsetHeight / 2) + "px";
}

function onUp(e) {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onUp);
}



// Notes
// mousedown first when mouse pressed down while click fires after down and up 