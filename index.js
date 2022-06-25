var buttons = $("button");

dict = {
    "w": "tom-1.mp3",
    "a": "tom-2.mp3",
    "s": "tom-3.mp3",
    "d": "tom-4.mp3",
    "j": "crash.mp3",
    "k": "kick-bass.mp3",
    "l": "snare.mp3"
}

buttons.on("click", function () {
    var innerLetter = this.innerHTML;
    makeSound(innerLetter);
    buttonAnimation(innerLetter);
})

$(document).on("keydown", (event) => {
    var letter = event.key;
    makeSound(letter);
    buttonAnimation(letter);
})

makeSound = (key) => {
    var address = "sounds/" + dict[key];
    var sound = new Audio(address);
    sound.play();
}

buttonAnimation = (key) => {
    var activeButton = $('.' + key);
    activeButton.addClass("pressed")
    setTimeout(() => {
        activeButton.removeClass("pressed");
    }, 100);
}