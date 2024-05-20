// translate.js
document.getElementById('switchLanguageBtn').addEventListener('click', () => {
    translateToEnglish();
});

function translateToEnglish() {
    // Mapeamento de conteúdo em português para inglês
    const translations = {
        "Bem-vindo ao meu portfólio": "Welcome to my portfolio",
        "Ir para o topo ⬆": "Go to the top ⬆",
        "Meu portfólio": "My portfolio",
        "Sobre": "About",
        "Meu currículo": "My resume",
        "Meu github": "My github",
        "Habilidades": "Skills",
        "Redes Sociais": "Social Media",
        "Meus certificados": "My certificates",
        "Contato": "Contact",
        "Todos os direitos reservados.": "All rights reserved."
    };

    // Traduzir conteúdo específico
    document.querySelector('header h1').textContent = translations["Bem-vindo ao meu portfólio"];
    document.querySelector('footer p').textContent = `&copy; 2024 Luciano Tadeu. ${translations["Todos os direitos reservados."]}`;

    // Traduzir os itens do menu
    const navItems = document.querySelectorAll('nav ul li a, nav ul li button');
    navItems.forEach(item => {
        const text = item.textContent;
        if (translations[text]) {
            item.textContent = translations[text];
        }
    });

    // Atualizar atributo lang no HTML
    document.documentElement.lang = 'en';
}
