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

// Função para permitir o arrasto dos cards (opcional)
function makeCardsDraggable() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let isDragging = false;
        let startX, startY, initialX, initialY;

        card.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            const rect = card.getBoundingClientRect();
            initialX = rect.left;
            initialY = rect.top;
            card.style.transition = 'none';
            card.style.zIndex = '1000';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            card.style.transform = `translate(${dx}px, ${dy}px) rotate(${dx * 0.05}deg)`;
        });

        document.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            isDragging = false;
            card.style.transition = 'transform 0.3s';
            card.style.transform = 'translate(0, 0) rotate(0deg)';
            card.style.zIndex = '1';
        });

        // To prevent the card from flipping when dragging
        card.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });
    });
}

// Chama as funções quando a página carrega
document.addEventListener("DOMContentLoaded", () => {
    setTheme();
    makeCardsDraggable();
});
