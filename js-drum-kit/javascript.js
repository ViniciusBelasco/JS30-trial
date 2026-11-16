window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);

    if (!audio) return; // Stop the function if no key bounded to an audio

    audio.currentTime = 0; // Rewind audio to the beginning
    audio.play();
    key.classList.add("playing");
});
