document.addEventListener("DOMContentLoaded", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedTheme = localStorage.getItem("theme");

  const setTheme = (theme) => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  };

  setTheme(storedTheme || (prefersDark ? "dark" : "light"));

  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
});

