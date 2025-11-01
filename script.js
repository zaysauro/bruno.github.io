// 🌗 Dark / Light mode toggle with SVG icons
const toggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    // ☀️ Sun icon
    themeIcon.innerHTML = `
      <path d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 0 1-2 0V5.5a1 1 0 0 1 1-1zm0 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm8-5a1 1 0 0 1-1 1h-1.5a1 1 0 0 1 0-2H19a1 1 0 0 1 1 1zM6.5 12a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h1.5a1 1 0 0 1 1 1zm9.15 5.15a1 1 0 0 1 0-1.41l1.06-1.06a1 1 0 1 1 1.41 1.41l-1.06 1.06a1 1 0 0 1-1.41 0zM6.88 6.88a1 1 0 0 1 0-1.41L7.94 4.4a1 1 0 0 1 1.41 1.41L8.29 6.88a1 1 0 0 1-1.41 0zm10.24-1.48a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41L16.12 6.8a1 1 0 0 1 0-1.41zM6.88 17.12a1 1 0 0 1 1.41 0l1.06 1.06a1 1 0 1 1-1.41 1.41L6.88 18.53a1 1 0 0 1 0-1.41z"/>
    `;
  } else {
    // 🌙 Moon icon
    themeIcon.innerHTML = `
      <path d="M21 12.79A9 9 0 0 1 12.21 3a7 7 0 1 0 8.79 9.79z"/>
    `;
  }
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
