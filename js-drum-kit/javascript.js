window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);

    console.log(audio)
    if (!audio) return; // Stop the function if no key bounded to an audio

    audio.play();

});