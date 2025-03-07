document.addEventListener("DOMContentLoaded", function () {
    const text = "Noé Dambreville";
    const speed = 150; 
    const restartDelay = 10000;
    let index = 0;
    
    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                document.getElementById("typewriter").innerHTML = "";
                index = 0;
                typeWriter();
            }, restartDelay);
        }
    }
    
    typeWriter();
});

