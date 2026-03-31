// NAVBAR TOGGLE MOBILE
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Cerrar navbar al hacer click en un link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// GITHUB PROJECTS
fetch("https://api.github.com/users/NahuelBarria/repos")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";

    const repos = data.filter(r => !r.fork).slice(0, 6);

    if (repos.length === 0) {
      container.innerHTML = '<p class="loading-text">No hay proyectos públicos aún.</p>';
      return;
    }

    repos.forEach(repo => {
      const image = `https://opengraph.githubassets.com/1/NahuelBarria/${repo.name}`;
      const card = document.createElement("div");
      card.classList.add("project-card");

      card.innerHTML = `
        <div class="project-image">
          <img src="${image}" alt="${repo.name}">
          <div class="overlay">
            <a href="${repo.html_url}" target="_blank" class="btn">
              <i class="fab fa-github"></i> Código
            </a>
            ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" class="btn btn-outline">Demo</a>` : ""}
          </div>
        </div>
        <div class="project-info">
          <h3>${repo.name}</h3>
          <p>${repo.description || "Proyecto en desarrollo"}</p>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(() => {
    document.getElementById("projects-container").innerHTML =
      '<p class="loading-text">No se pudieron cargar los proyectos.</p>';
  });
