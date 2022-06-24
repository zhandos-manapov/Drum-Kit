var buttons = document.querySelectorAll("button");

dict = {
    "w":"tom-1.mp3", 
    "a":"tom-2.mp3",
    "s":"tom-3.mp3",
    "d":"tom-4.mp3",
    "j":"crash.mp3",
    "k":"kick-bass.mp3",
    "l":"snare.mp3"
}

for (var button of buttons) {
    button.addEventListener("click", function () {
        var innerLetter = this.innerHTML;
        var address = "sounds/" + dict[innerLetter];
        var sound = new Audio(address);
        sound.play();
    });
}



