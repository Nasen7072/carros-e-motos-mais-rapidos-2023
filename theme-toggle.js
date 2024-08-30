theme-toggle.js

document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('toggle-theme');
    const themeStylesheet = document.getElementById('theme-stylesheet');

    // Checa o tema atual no localStorage
    let currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);

    // Adiciona um ouvinte de evento para o botão de troca de tema
    themeButton.addEventListener('click', () => {
        // Alterna o tema entre claro e escuro
        currentTheme = (currentTheme === 'light') ? 'dark' : 'light';
        setTheme(currentTheme);
    });

    function setTheme(theme) {
        if (theme === 'dark') {
            themeStylesheet.setAttribute('href', 'dark-theme.css');
        } else {
            themeStylesheet.setAttribute('href', 'light-theme.css');
        }
        // Salva a preferência no localStorage
        localStorage.setItem('theme', theme);
    }
});
theme-toggle.js

document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('toggle-theme');
    const themeStylesheet = document.getElementById('theme-stylesheet');

    // Checa o tema atual no localStorage
    let currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);

    // Adiciona um ouvinte de evento para o botão de troca de tema
    themeButton.addEventListener('click', () => {
        // Alterna o tema entre claro e escuro
        currentTheme = (currentTheme === 'light') ? 'dark' : 'light';
        setTheme(currentTheme);
    });

    function setTheme(theme) {
        if (theme === 'dark') {
            themeStylesheet.setAttribute('href', 'dark-theme.css');
        } else {
            themeStylesheet.setAttribute('href', 'light-theme.css');
        }
        // Salva a preferência no localStorage
        localStorage.setItem('theme', theme);
    }
}); 
