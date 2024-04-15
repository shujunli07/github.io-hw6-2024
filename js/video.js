document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('player1');
    video.autoplay = false;
    video.loop = false;

    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const slowButton = document.getElementById('slower');
    const fastButton = document.getElementById('faster');
    const skipButton = document.getElementById('skip');
    const muteButton = document.getElementById('mute');
    const volumeSlider = document.getElementById('slider');
    const volumeDisplay = document.getElementById('volume');
    const vintageButton = document.getElementById('vintage');
    const origButton = document.getElementById('orig');

    playButton.addEventListener('click', () => {
        video.play();
        volumeDisplay.textContent = volumeSlider.value + '%';
    });

    pauseButton.addEventListener('click', () => {
        video.pause();
    });

    slowButton.addEventListener('click', () => {
        video.playbackRate *= 0.9;
        console.log(`New speed: ${video.playbackRate}`);
    });

    fastButton.addEventListener('click', () => {
        video.playbackRate /= 0.9;
        console.log(`New speed: ${video.playbackRate}`);
    });

    skipButton.addEventListener('click', () => {
        if (video.currentTime + 10 < video.duration) {
            video.currentTime += 10;
        } else {
            video.currentTime = 0; // Go back to start
        }
        console.log(`Current location: ${video.currentTime}`);
    });

    muteButton.addEventListener('click', () => {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
    });

    volumeSlider.addEventListener('input', () => {
        video.volume = volumeSlider.value / 100;
        volumeDisplay.textContent = volumeSlider.value + '%';
    });

    vintageButton.addEventListener('click', () => {
        video.classList.add('oldSchool');
    });

    origButton.addEventListener('click', () => {
        video.classList.remove('oldSchool');
    });
});

