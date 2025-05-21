document.addEventListener('DOMContentLoaded', function() {
    // Modo escuro: mantém o tema ao recarregar
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            if (document.body.classList.contains('dark-theme')) {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Animação fade-in para seções (caso não esteja no HTML inline)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Atualiza o ano do rodapé automaticamente
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Feedback do formulário de contato (simulação)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const feedback = document.getElementById('form-feedback');
            feedback.style.display = 'block';
            feedback.style.color = 'green';
            feedback.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
            setTimeout(() => { feedback.style.display = 'none'; }, 4000);
            this.reset();
        });
    }
});