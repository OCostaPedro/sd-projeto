document.addEventListener('DOMContentLoaded', () => {

    const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('click', (e) => {
        e.preventDefault(); 
        

        const targetId = ctaButton.getAttribute('href');
        const targetElement = document.querySelector(targetId);


        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    
    console.log("Landing Page carregada. Foco na apresentação do projeto Arduino.");

    const codeToggle = document.querySelector('.code-toggle');
    const codeWrap = document.querySelector('.code-wrap');
    const codigoExemplo = document.getElementById('codigo-exemplo');

    if (codeToggle && codeWrap && codigoExemplo) {
        codeToggle.addEventListener('click', () => {
            const isCollapsed = codeWrap.classList.contains('collapsed');
            if (isCollapsed) {
                codeWrap.classList.remove('collapsed');
                codeWrap.classList.add('expanded');
                codeToggle.setAttribute('aria-expanded', 'true');
                codeToggle.textContent = 'Ocultar código';

                codigoExemplo.focus();
            } else {
                codeWrap.classList.remove('expanded');
                codeWrap.classList.add('collapsed');
                codeToggle.setAttribute('aria-expanded', 'false');
                codeToggle.textContent = 'Mostrar código completo';
            }
        });
    }
});