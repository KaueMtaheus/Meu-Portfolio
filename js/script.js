//menu hamburge

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.getElementById('navegação');

    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('show');
    });
});




//animação detransição paragrafo
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('p');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.2 // Ajuste conforme necessário
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});


//Animação projetos aparecer, esconder

document.addEventListener('DOMContentLoaded', function() {
    const containerProject = document.getElementById('project');
    const btnVerMais = document.getElementById('btn-ver-mais');
    const btnVerMenos = document.getElementById('btn-ver-menos');
    const extraProjects = document.querySelector('.extra-projects');
    const container = document.getElementById('container4')

    function showExtraProjects() {
        containerProject.style.height = 'auto'; // Ajusta a altura do container para acomodar o conteúdo
        extraProjects.style.display = 'flex'; // Torna visível a seção adicional de projetos
        btnVerMais.style.display = 'none'; // Oculta o botão "Ver Mais"
        btnVerMenos.style.display = 'flex'; // Exibe o botão "Ver Menos"
    }

    function hideExtraProjects() {
        containerProject.style.height = 'auto'; // Remove a altura definida para retornar ao tamanho automático
        extraProjects.style.display = 'none'; // Oculta a seção adicional de projetos
        btnVerMais.style.display = 'flex'; // Exibe o botão "Ver Mais"
        btnVerMenos.style.display = 'none'; // Oculta o botão "Ver Menos"
    }


    btnVerMais.addEventListener('click', showExtraProjects);
    btnVerMenos.addEventListener('click', hideExtraProjects);
});
