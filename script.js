document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Menu';
    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
    document.querySelector('header').appendChild(toggleButton);
});
