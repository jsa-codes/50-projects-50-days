// This gives a node list of all of the labels
const labels = document.querySelectorAll('.form-control label');

// Since it's a node list we can use forEach.
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
        .join('')

})