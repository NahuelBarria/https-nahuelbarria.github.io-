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

// CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

// GITHUB PROJECTS
fetch("https://api.github.com/users/NahuelBarria/repos")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projects-container");

    data.slice(0, 6).forEach(repo => {
      const card = document.createElement("div");
      card.classList.add("project-card");

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "Proyecto en desarrollo"}</p>
        <a href="${repo.html_url}" target="_blank" class="btn">Ver código</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.log(err));
