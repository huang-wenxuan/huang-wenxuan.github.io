(function () {
  const root = document.documentElement;
  const buttons = document.querySelectorAll("[data-set-lang]");
  const saved = localStorage.getItem("lang");
  const start = saved === "zh" || saved === "en" ? saved : "en";

  function setLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    localStorage.setItem("lang", lang);
    buttons.forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-set-lang") === lang));
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-set-lang"));
    });
  });

  setLang(start);
})();
