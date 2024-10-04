// Função para alternar o tema
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const themeToggleBtn = document.getElementById("theme-toggle");

    if (currentTheme === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
        themeToggleBtn.textContent = "☀️";
        themeToggleBtn.setAttribute("aria-label", "Alternar para tema claro");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        themeToggleBtn.textContent = "🌙";
        themeToggleBtn.setAttribute("aria-label", "Alternar para tema escuro");
        localStorage.setItem("theme", "light");
    }
}

// Função para definir o tema com base na preferência do usuário ou no sistema
function setTheme() {
    const savedTheme = localStorage.getItem("theme");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const themeToggleBtn = document.getElementById("theme-toggle");

    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        themeToggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
        themeToggleBtn.setAttribute("aria-label", savedTheme === "dark" ? "Alternar para tema claro" : "Alternar para tema escuro");
    } else {
        const theme = prefersDarkScheme ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        themeToggleBtn.textContent = prefersDarkScheme ? "☀️" : "🌙";
        themeToggleBtn.setAttribute("aria-label", prefersDarkScheme ? "Alternar para tema claro" : "Alternar para tema escuro");
    }
}

// Função para virar os cards
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Chama a função setTheme quando a página carrega
document.addEventListener("DOMContentLoaded", setTheme);
