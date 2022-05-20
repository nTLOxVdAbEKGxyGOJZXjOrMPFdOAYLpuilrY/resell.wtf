var option = {
    strings: ['<i>craze#0001 - 811216525322616902</i>', '<i>act broke to stay rich</i>', '<i>Knucks = Home</i>'],
    typeSpeed: 55,
    backSpeed: 65,
    loop: true,
    loopCount: Infinity,
    showCursor: false
}

var typed = new Typed(".typed", option)

var option2 = {
    strings: ['<i>click to enter</i>'],
    typeSpeed: 55,
    loop: false,
    showCursor: true
}

var typed2 = new Typed("#entertext", option2)

function enterSite() {
    document.getElementById("song").play();
    document.getElementById("enter").className = "animate__animated animate__fadeOut";
    document.getElementById('entertext').remove();
    setTimeout(() => {
            document.getElementById("enter").remove();
    }, 2000)
}
