const bottomSection = document.getElementById('bottom-section');
const revealButton = document.getElementById('reveal-button');

revealButton.addEventListener('click', () => {
    if (bottomSection.classList.contains('expanded')) {
        bottomSection.classList.remove('expanded');
        revealButton.textContent = 'Show More';
    } else {
        bottomSection.classList.add('expanded');
        revealButton.textContent = 'Show Less';
    }
});
