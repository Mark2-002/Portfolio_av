
//
document.addEventListener("DOMContentLoaded", function () {
    const elem = document.getElementById("dp");

    let timeout;

    elem.addEventListener("click", dfgh);

    function dfgh() {
        // Clear the existing timeout
        clearTimeout(timeout);
        document.getElementById('left').classList.remove("left1");
        document.getElementById('left').classList.remove("left2");
        
        //Adding class
        document.getElementById('left').classList.add("left1");

        // Set a new timeout
        timeout = setTimeout(function () {
            // Adding class
            document.getElementById('left').classList.add("left2");
        }, 3000);
        
    }
}
);
