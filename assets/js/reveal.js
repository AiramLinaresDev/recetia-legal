(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Scroll reveal ---------- */
  var revealables = document.querySelectorAll("[data-reveal]");
  if (reduce || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealables.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Menú móvil ---------- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Waitlist ---------- */
  var form = document.getElementById("wlForm");
  var status = document.getElementById("wlStatus");
  if (form) {
    var action = form.getAttribute("action") || "";
    var configured = action.indexOf("XXXXXXXX") === -1 && action.indexOf("formspree.io") !== -1;

    function setStatus(msg, ok) {
      if (!status) return;
      status.textContent = msg;
      status.className = "wl-status " + (ok ? "wl-status--ok" : "wl-status--err");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var email = input ? input.value.trim() : "";
      if (!email || email.indexOf("@") === -1) {
        setStatus("Introduce un correo válido.", false);
        if (input) input.focus();
        return;
      }

      // Sin endpoint de Formspree configurado: abrir el correo del usuario.
      if (!configured) {
        var subject = encodeURIComponent("Avísame cuando salga RecetIA");
        var body = encodeURIComponent("Hola, quiero que me aviséis cuando RecetIA esté disponible. Mi correo: " + email);
        var to = form.getAttribute("data-email") || "";
        window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
        setStatus("Abriendo tu correo para confirmar…", true);
        return;
      }

      var btn = form.querySelector("button");
      if (btn) { btn.disabled = true; btn.textContent = "Enviando…"; }
      setStatus("", true);

      fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            setStatus("¡Listo! Te avisaremos el día del lanzamiento.", true);
          } else {
            setStatus("No se pudo enviar. Inténtalo de nuevo en un momento.", false);
          }
        })
        .catch(function () {
          setStatus("Sin conexión. Revisa tu red e inténtalo otra vez.", false);
        })
        .finally(function () {
          if (btn) { btn.disabled = false; btn.textContent = "Avísame"; }
        });
    });
  }
})();
