const toggleMenuBtn = document.querySelector('#toggle-btn');
const body = document.querySelector('body');
toggleMenuBtn.addEventListener('click', (event) => {
    event.preventDefault();
    body.classList.toggle('sidebar-toggled');
})
