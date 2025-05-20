document.addEventListener('DOMContentLoaded', function() {
    const projectsGrid = document.getElementById('projects-grid');
    const username = 'Iltonns'; // Seu usuário GitHub

    // Busca repositórios do GitHub
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`)
        .then(response => response.json())
        .then(repos => {
            repos.slice(0, 6).forEach(repo => { // Limita a 6 projetos
                if (!repo.fork) { // Ignora forks
                    const projectCard = document.createElement('div');
                    projectCard.className = 'project-card';
                    projectCard.innerHTML = `
                        <img src="https://raw.githubusercontent.com/${username}/${repo.name}/main/screenshot.png" alt="${repo.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Project+Image'">
                        <div class="project-info">
                            <h3>${repo.name.replace(/-/g, ' ')}</h3>
                            <p>${repo.description || 'Sem descrição disponível.'}</p>
                            <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
                        </div>
                    `;
                    projectsGrid.appendChild(projectCard);
                }
            });
        })
        .catch(error => {
            console.error('Erro ao carregar projetos:', error);
            projectsGrid.innerHTML = '<p>Não foi possível carregar os projetos. <a href="https://github.com/Iltonns">Veja no GitHub</a></p>';
        });
});