function changeTheme() {
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('.container')
    navbar.style.backgroundColor = 'var(--color)';
    content.style.backgroundColor = 'var(--seccolor)';
}

function ct() {
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('.container')
    navbar.style.backgroundColor = 'var(--primcolor)';
    content.style.backgroundColor = 'var(--secprim)';
}
