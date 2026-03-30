// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);



// 🔥 GITHUB PROJECTS CON IMAGEN
fetch("https://api.github.com/users/NahuelBarria/repos")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projects-container");

    data.slice(0, 6).forEach(repo => {

      // imagen placeholder automática
      const image = `https://picsum.photos/400/250?random=${Math.random()}`;

      const card = document.createElement("div");
      card.classList.add("project-card");

      card.innerHTML = `
        <div class="project-image">
          <img src="${image}" alt="preview">
          <div class="overlay">
            <a href="${repo.html_url}" target="_blank" class="btn">Código</a>
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
  .catch(err => console.log(err));
