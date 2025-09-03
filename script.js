// Navigation mobile
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Fermer le menu sur clic de lien
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Scroll fluide
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Animation des cartes menu au survol
document.querySelectorAll(".menu-card").forEach((card, index) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = `translateY(-8px) rotate(${
      index % 2 ? "1deg" : "-1deg"
    })`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) rotate(0deg)";
  });
});

// Parallaxe légère sur les cartes flottantes
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const foodCards = document.querySelectorAll(".food-card");

  foodCards.forEach((card, index) => {
    const speed = 0.5 + index * 0.1;
    card.style.transform += ` translateY(${scrollY * speed * 0.1}px)`;
  });
});

// Animation d'entrée pour les éléments
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

// Observer les éléments avec animation d'entrée
document
  .querySelectorAll(".menu-card, .contact-card, .about-text, .about-visual")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });

// Effet de typing sur le titre principal (optionnel)
const heroTitle = document.querySelector(".hero-text h1");
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = "";
  let i = 0;

  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };

  // Démarrer l'effet après un petit délai
  setTimeout(typeWriter, 500);
}

// Rotation aléatoire des cartes flottantes
document.querySelectorAll(".food-card").forEach((card) => {
  const randomRotation = Math.random() * 20 - 10; // Entre -10 et +10 degrés
  card.style.setProperty("--rotation", `${randomRotation}deg`);
});

// Animation des prix au survol
document.querySelectorAll(".item-price").forEach((price) => {
  price.addEventListener("mouseenter", () => {
    price.style.transform = "scale(1.1)";
    price.style.color = "var(--burnt-orange)";
  });

  price.addEventListener("mouseleave", () => {
    price.style.transform = "scale(1)";
    price.style.color = "var(--warm-red)";
  });
});

// Effet de bounce sur les icônes de contact
document.querySelectorAll(".contact-icon").forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    icon.style.animation = "bounce 0.6s ease";
  });

  icon.addEventListener("animationend", () => {
    icon.style.animation = "";
  });
});

// Ajouter l'animation bounce en CSS via JavaScript
const style = document.createElement("style");
style.textContent = `
    @keyframes bounce {
        0%, 20%, 60%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        80% { transform: translateY(-5px); }
    }
`;
document.head.appendChild(style);
