// 🌙 Dark / Light mode toggle
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleBtn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// ✨ Fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});
document.querySelectorAll("section").forEach(sec => observer.observe(sec));

// 🧠 Fetch GitHub repositories automatically
const repoList = document.getElementById("repoList");

async function fetchRepos() {
  try {
    const response = await fetch("https://api.github.com/users/zaysauro/repos?sort=updated");
    const repos = await response.json();

    repoList.innerHTML = "";

    repos.slice(0, 6).forEach(repo => {
      const div = document.createElement("div");
      div.classList.add("repo");
      div.innerHTML = `
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <p>${repo.description || "No description available."}</p>
      `;
      repoList.appendChild(div);
    });
  } catch (err) {
    repoList.innerHTML = "<p>⚠️ Failed to load repositories.</p>";
  }
}

fetchRepos();
