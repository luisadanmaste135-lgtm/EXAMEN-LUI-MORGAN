window.addEventListener('DOMContentLoaded', () => {
    // Muestra la alerta de bienvenida con un pequeño retraso
    setTimeout(() => {
        const welcomeAlert = document.getElementById('welcomeAlert');
        if (welcomeAlert) {
            welcomeAlert.style.display = 'block';
        }
    }, 400);

    // Inicializa el reloj en tiempo real
    startLiveClock();

    // Configura el menú móvil independiente
    setupBioMobileMenu();
});

function closeAlert() {
    const welcomeAlert = document.getElementById('welcomeAlert');
    if (welcomeAlert) {
        welcomeAlert.style.display = 'none';
    }
}

function startLiveClock() {
    const clockContainer = document.getElementById('liveClock');
    if (!clockContainer) return; 

    setInterval(() => {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'p.m.' : 'a.m.';
        
        hours = hours % 12;
        hours = hours ? hours : 12; 
        const hourStr = String(hours).padStart(2, '0');

        clockContainer.textContent = `${day}/${month}/${year} | ${hourStr}:${minutes}:${seconds} ${ampm}`;
    }, 1000);
}

function setupBioMobileMenu() {
    const menuToggle = document.getElementById('bio-mobile-menu');
    const navLinks = document.querySelector('.bio-nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
        });
    }
}