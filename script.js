// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});



// GITHUB PROJECTS
fetch("https://api.github.com/users/NahuelBarria/repos")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("projects");

    data.slice(0, 6).forEach(repo => {
      const card = document.createElement("div");
      card.classList.add("project-card");

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "Proyecto sin descripción"}</p>
        <a href="${repo.html_url}" target="_blank" class="btn">Ver proyecto</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.log(err));