document.addEventListener('DOMContentLoaded', function() {
    const projectsGrid = document.getElementById('projects-grid');
    
    // Imagens customizadas para cada repositório
    const projectImages = {
        'iltonns.github.io': 'https://raw.githubusercontent.com/iltonns/iltonns.github.io/main/assets/images/portfolio.jpg',
        'projeto-olist': 'https://raw.githubusercontent.com/iltonns/iltonns.github.io/main/assets/images/olist-dashboard.jpg',
        // Adicione outros projetos conforme necessário
    };

    fetch('https://api.github.com/users/iltonns/repos?sort=updated&direction=desc')
        .then(response => response.json())
        .then(data => {
            projectsGrid.innerHTML = '';
            
            data.forEach(repo => {
                if (!repo.fork && repo.name !== 'iltonns') { // Filtra repositórios
                    const projectCard = document.createElement('div');
                    projectCard.className = 'project-card';
                    
                    projectCard.innerHTML = `
                        <div class="project-image" style="background-image: url('${projectImages[repo.name] || 'https://via.placeholder.com/600x400?text=' + encodeURIComponent(repo.name)}')">
                            <div class="project-overlay">
                                <h3>${repo.name.replace(/-/g, ' ')}</h3>
                                <p>${repo.description || 'Projeto sem descrição'}</p>
                                <div class="project-links">
                                    <a href="${repo.html_url}" target="_blank">GitHub</a>
                                    ${repo.homepage ? `<a href="${repo.homepage}" target="_blank">Ver Projeto</a>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                    
                    projectsGrid.appendChild(projectCard);
                }
            });
        })
        .catch(error => {
            console.error('Erro ao carregar projetos:', error);
            projectsGrid.innerHTML = `
                <div class="error-message">
                    <p>Não foi possível carregar os projetos. Por favor, tente novamente mais tarde.</p>
                    <a href="https://github.com/iltonns?tab=repositories" target="_blank">Ver no GitHub</a>
                </div>
            `;
        });
});