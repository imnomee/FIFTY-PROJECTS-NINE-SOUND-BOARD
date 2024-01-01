const sounds = ['logon', 'ring03', 'ring05', 'ring08', 'ring09'];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.addEventListener('click', () => {
        stopSongs();
        const song = document.getElementById(sound).play();
    });
    btn.innerText = sound;
    document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    });
}
