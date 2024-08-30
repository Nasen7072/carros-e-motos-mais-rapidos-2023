document.querySelector('.menu-hamburguer').addEventListener('click', function() {
    document.querySelector('.menu-cascata').classList.toggle('show');
});

document.querySelector('.menu-sucos > a').addEventListener('click', function(event) {
    event.preventDefault();
    const sucosMenu = document.querySelector('.menu-sucos');
    sucosMenu.classList.toggle('show-sucos');
    if (sucosMenu.classList.contains('show-sucos')) {
        sucosMenu.querySelector('ul').style.display = 'block';
    } else {
        sucosMenu.querySelector('ul').style.display = 'none';
    }
});
