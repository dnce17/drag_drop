let circles = document.querySelectorAll(".circle");

circles.forEach(item => {
    item.addEventListener("mousedown", function onDown() {
        let circle = this;
        document.addEventListener("mousemove", function onMove(e) {
            circle.style.left = e.clientX - (circle.offsetWidth / 2)+ "px";
            circle.style.top = e.clientY - (circle.offsetHeight / 2) + "px";

            document.addEventListener("mouseup", function onUp() {
                document.removeEventListener("mousemove", onMove);
                document.removeEventListener("mouseup", onUp);
            });
        });
    });
})


// Notes
// mousedown first when mouse pressed down while click fires after down and up 