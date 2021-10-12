document.getElementById('menu_toggle_btn').addEventListener('click', function() {
    let menu = document.getElementById('expand');
    if (menu.style.display === 'none') {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
    } else {
        menu.style.display = 'none';
    }
});

// document.querySelector('.menu_toggle_btn').addEventListener('click', () => {
//     document.querySelector('.expand').classList.toggle('active');
// });