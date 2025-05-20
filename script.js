document.addEventListener('DOMContentLoaded', function() {
    const projectsGrid = document.getElementById('projects-grid');
    const loading = document.getElementById('projects-loading');
    const username = 'Iltonns'; // Seu usuário GitHub

    // Mostra o loading antes de buscar os projetos
    if (loading) loading.style.display = 'block';

    fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`)
        .then(response => response.json())
        .then(repos => {
            // Limpa projetos antigos e skeletons
            projectsGrid.innerHTML = '';
            let count = 0;
            repos.forEach(repo => {
                if (!repo.fork && count < 6) { // Ignora forks e limita a 6 projetos
                    const projectCard = document.createElement('div');
                    projectCard.className = 'project-card fade-in';
                    projectCard.innerHTML = `
                        <div class="project-image">
                            <img src="https://raw.githubusercontent.com/${username}/${repo.name}/main/screenshot.png" 
                                 alt="Screenshot do projeto ${repo.name.replace(/-/g, ' ')}"
                                 onerror="this.src='https://via.placeholder.com/350x200?text=Projeto+Sem+Imagem';"
                                 loading="lazy"
                                 style="width:100%;height:100%;object-fit:cover;border-radius:10px 10px 0 0;">
                        </div>
                        <div class="project-info">
                            <h3>${repo.name.replace(/-/g, ' ')}</h3>
                            <p>${repo.description || 'Sem descrição disponível.'}</p>
                            <div class="project-links">
                                <a href="${repo.html_url}" target="_blank" aria-label="Ver repositório no GitHub">
                                    <i class="fab fa-github"></i> Ver no GitHub
                                </a>
                                ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" aria-label="Ver projeto publicado"><i class="fas fa-external-link-alt"></i> Demo</a>` : ''}
                            </div>
                        </div>
                    `;
                    projectsGrid.appendChild(projectCard);
                    count++;
                }
            });
            if (count === 0) {
                projectsGrid.innerHTML = '<p>Nenhum projeto público encontrado. <a href="https://github.com/Iltonns">Veja no GitHub</a></p>';
            }
        })
        .catch(error => {
            console.error('Erro ao carregar projetos:', error);
            projectsGrid.innerHTML = '<p>Não foi possível carregar os projetos. <a href="https://github.com/Iltonns">Veja no GitHub</a></p>';
        })
        .finally(() => {
            if (loading) loading.style.display = 'none';
        });

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