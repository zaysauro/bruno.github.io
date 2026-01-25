<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bruno Zayed — iOS Developer & Creator</title>

  <style>
    /* ================= RESET ================= */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* ================= THEME ================= */
    :root {
      --primary: #0a84ff;
      --accent: #5e5ce6;

      --bg: #0f0f12;
      --bg-secondary: rgba(255, 255, 255, 0.08);
      --text: #f5f5f7;
      --text-secondary: #a1a1a6;
      --border: rgba(255, 255, 255, 0.12);
      --glass: rgba(255, 255, 255, 0.08);
      --blur: blur(20px);
    }

    body.light {
      --bg: #f5f5f7;
      --bg-secondary: rgba(255, 255, 255, 0.7);
      --text: #1d1d1f;
      --text-secondary: #6e6e73;
      --border: rgba(0, 0, 0, 0.08);
      --glass: rgba(255, 255, 255, 0.7);
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: radial-gradient(
        circle at top,
        rgba(94, 92, 230, 0.15),
        transparent 60%
      ), var(--bg);
      color: var(--text);
      line-height: 1.6;
      transition: background 0.3s ease, color 0.3s ease;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    /* ================= NAV ================= */
    nav {
      position: sticky;
      top: 0;
      z-index: 1000;
      backdrop-filter: var(--blur);
      background: var(--glass);
      border-bottom: 1px solid var(--border);
    }

    .nav-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      font-weight: 700;
      font-size: 1.1rem;
    }

    .nav-right {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .theme-toggle {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid var(--border);
      background: var(--bg-secondary);
      display: grid;
      place-items: center;
      cursor: pointer;
    }

    .theme-toggle svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }

    /* ================= HERO ================= */
    header {
      max-width: 1100px;
      margin: 0 auto;
      padding: 4rem 1.25rem 3rem;
      text-align: center;
    }

    header h1 {
      font-size: clamp(2.2rem, 6vw, 3.5rem);
      font-weight: 800;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
    }

    header p {
      color: var(--text-secondary);
      max-width: 620px;
      margin: 0 auto;
      font-size: 1.1rem;
    }

    /* ================= SECTIONS ================= */
    section {
      max-width: 1100px;
      margin: 0 auto;
      padding: 3rem 1.25rem;
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease;
    }

    section.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .section-title {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }

    .section-subtitle {
      color: var(--text-secondary);
      margin-bottom: 2rem;
    }

    /* ================= GLASS CARDS ================= */
    .grid {
      display: grid;
      gap: 1.5rem;
    }

    @media (min-width: 768px) {
      .grid.posts {
        grid-template-columns: repeat(3, 1fr);
      }
      .grid.projects {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .card {
      background: var(--glass);
      backdrop-filter: var(--blur);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 1.5rem;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .card:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.25);
    }

    .tag {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--primary);
      background: rgba(10, 132, 255, 0.15);
      padding: 0.25rem 0.6rem;
      border-radius: 999px;
      margin-bottom: 0.75rem;
    }

    .card h3 {
      margin-bottom: 0.5rem;
    }

    .card p {
      color: var(--text-secondary);
      font-size: 0.95rem;
    }

    /* ================= FOOTER ================= */
    footer {
      text-align: center;
      padding: 3rem 1rem;
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
  </style>
</head>

<body>
  <!-- ================= NAV ================= -->
  <nav>
    <div class="nav-container">
      <span class="logo">Bruno Zayed</span>

      <div class="nav-right">
        <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
          <svg id="themeIcon" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 0 1 12.21 3a7 7 0 1 0 8.79 9.79z"/>
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <!-- ================= HERO ================= -->
  <header>
    <h1>iOS Developer & Creator</h1>
    <p>
      Building thoughtful apps and sharing the process — from idea to App Store.
    </p>
  </header>

  <!-- ================= BLOG ================= -->
  <section>
    <h2 class="section-title">Latest Posts</h2>
    <p class="section-subtitle">Stories about building apps and learning in public</p>

    <div class="grid posts">
      <a href="blog/limitae.html" class="card">
        <span class="tag">Finance</span>
        <h3>How I Built Limitaê</h3>
        <p>The journey of creating a personal finance tracker with SwiftUI.</p>
      </a>

      <a href="blog/coffeepixel.html" class="card">
        <span class="tag">Design</span>
        <h3>Coffeepixel: From Idea to Launch</h3>
        <p>Turning photos into pixel art and shipping an indie app.</p>
      </a>

      <a href="blog/super-calculadora.html" class="card">
        <span class="tag">Flutter + Swift</span>
        <h3>Flutter Bridge Calculator</h3>
        <p>Mixing Flutter UI with native Swift performance.</p>
      </a>
    </div>
  </section>

  <!-- ================= PROJECTS ================= -->
  <section>
    <h2 class="section-title">Apps</h2>
    <p class="section-subtitle">Available on the App Store</p>

    <div class="grid projects">
      <div class="card">
        <h3>Limitaê</h3>
        <p>Personal finance tracker focused on clarity and limits.</p>
      </div>

      <div class="card">
        <h3>Coffeepixel</h3>
        <p>Minimal pixel-art editor, fully offline and private.</p>
      </div>
    </div>
  </section>

  <!-- ================= FOOTER ================= -->
  <footer>
    © 2025 Bruno Zayed — Built with Swift & curiosity
  </footer>

  <!-- ================= JS ================= -->
  <script>
    /* ===== THEME PERSISTENCE ===== */
    const toggleBtn = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") document.body.classList.add("light");

    function updateIcon() {
      themeIcon.innerHTML = document.body.classList.contains("light")
        ? '<path d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 0 1-2 0V5.5a1 1 0 0 1 1-1zm0 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/>'
        : '<path d="M21 12.79A9 9 0 0 1 12.21 3a7 7 0 1 0 8.79 9.79z"/>';
    }
    updateIcon();

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");
        localStorage.setItem(
          "theme",
          document.body.classList.contains("light") ? "light" : "dark"
        );
        updateIcon();
      });
    }

    /* ===== FADE IN SECTIONS ===== */
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.15 });

    document.querySelectorAll("section").forEach(sec => observer.observe(sec));
  </script>
</body>
</html>
