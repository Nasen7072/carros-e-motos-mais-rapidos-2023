// Seleciona o botão e o body
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica o tema atual e aplica ao carregar a página
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    body.classList.remove('light');
} else {
    body.classList.add('light');
}

// Adiciona um evento de clique ao botão
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.classList.remove('light');
        themeToggle.classList.add('dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem('theme', 'light');
        themeToggle.classList.remove('dark');
        themeToggle.classList.add('light');
    }
});
