const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

// Places the cursor in the textarea
textarea.focus()

textarea.addEventListener('keyup', (e) => {
    // When the keyup event happens, Create a function called 'createTags'
    // e.target.value = Whatever we type in the textarea
    createTags(e.target.value)
})

function createTags(input) {
    const tags = input
        // .split(',')
        // .filter(tag => tag.trim() !== '')
        // .map(tag => tag.trim());
        // console.log(tags);
        
        // Alternate version of the code above:
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag !== '')

        // Sets the default state of the tags to be an empty string, removing the initial choices we created earlier
        tagsEl.innerHTML = ''

        tags.forEach(tag => {
            const tagEl = document.createElement('span')
            tagEl.classList.add('tag')
            tagEl.innerText = tag
            tagsEl.appendChild(tagEl)
        })
} 