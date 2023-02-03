const sounds = ['applause','boo', 'gasp', 'tada', 'victory', 'wrong']

/* 
- For each sound
-   create a variable called 'btn'
-       for that 'btn' variable we want to create a button element
-           and add a class of 'button' to that 'btn' variable
-   Set the inner text of each button element to have the innerText of 'applause','boo', 'gasp', 'tada', 'victory', 'wrong'
-  This will leave us with 6 buttons each with text describing on of the sounds above.
*/
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()
    })

    // Get the buttons container
    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0
    })
}