// Exemplo de como poderia ficar a função que renderiza os projetos
function renderProjects(projects) {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    
    // Mapeamento de imagens para cada repositório (você pode armazenar essas URLs em um objeto)
    const projectImages = {
        'iltonns.github.io': 'https://exemplo.com/imagem-portfolio.jpg',
        'dashboard-vendas-olist': 'https://exemplo.com/imagem-dashboard.jpg',
        // ... outros projetos
    };
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image" style="background-image: url('${projectImages[project.name] || 'https://via.placeholder.com/600x400'}');">
                <div class="project-overlay">
                    <h3 class="project-title">${project.name}</h3>
                    <p class="project-description">${project.description || 'Sem descrição disponível'}</p>
                    <div class="project-links">
                        <a href="${project.html_url}" class="project-link" target="_blank">GitHub</a>
                        ${project.homepage ? `<a href="${project.homepage}" class="project-link" target="_blank">Ver Projeto</a>` : ''}
                    </div>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}