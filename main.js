// get all keys
const keys = document.querySelectorAll(".key")

// play notes
function playNote (event) {
    let audioKeyCode = getKeyCode (event); // audio keycode

    // typed or pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    // if key exists
    const isKeyExists = key

    if (!isKeyExists) {
        return;
    }

    addPlayingClass (key)
    playAudio (audioKeyCode)
}

function addPlayingClass (key) {
    key.classList.add('playing')
    return 0;
}

function getKeyCode (event) {
    let keyCode;

    const isKeyboard = event.type === "keydown"
    if (isKeyboard) {
        keyCode = event.keyCode
    }
    else {
        keyCode = event.target.dataset.key
    }

    return keyCode;
}

function playAudio (audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function removePlayingClass (event) {
    event.target.classList.remove('playing')
}

function registerEvents () {
    // click with mouse
    keys.forEach( function(key) {
        key.addEventListener("click", playNote) // function detected a click with mouse
        key.addEventListener("transitionend", removePlayingClass)
    })

    //keyboard type
    window.addEventListener("keydown", playNote) // detected keyboard
}

window.addEventListener("load", registerEvents)