let btnFilter = document.getElementById('filter');

btnFilter.addEventListener('click', function() {
    let list = document.getElementById('expanded');
    if (list.style.display === 'none') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
})

console.log(btnFilter);