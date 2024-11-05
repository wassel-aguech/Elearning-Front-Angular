document.addEventListener('DOMContentLoaded', function () {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const totalPanels = document.querySelectorAll('.slider-panel').length;

  let currentIndex = 0;

  function updateSlider() {
    const angle = -360 / totalPanels * currentIndex;
    sliderWrapper.style.transform = `rotateY(${angle}deg)`;
  }

  prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalPanels - 1;
    updateSlider();
  });

  nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex < totalPanels - 1) ? currentIndex + 1 : 0;
    updateSlider();
  });

  // Initialize the slider to show the first panel
  updateSlider();
});




document.addEventListener('DOMContentLoaded', function() {
  // Handle scroll animations for elements with class 'reveal'
  function scrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(reveal => {
      const revealTop = reveal.getBoundingClientRect().top;

      if (revealTop < windowHeight - 150) {
        reveal.classList.add('active');
      } else {
        reveal.classList.remove('active');
      }
    });
  }

  // Initialize IntersectionObserver for more efficient scroll animations
  function setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, options);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(element => observer.observe(element));
  }

  // Set up event listeners
  window.addEventListener('scroll', scrollAnimations);
  setupIntersectionObserver();
  scrollAnimations(); // Initial call to handle elements already in view
});

// src/assets/js/custom.js
function myFunction() {
  console.log('Hello from JavaScript!');
}


// Fonction de test pour vérifier si le code JavaScript fonctionne
function testJavaScriptFunction() {
  // Affiche un message dans la console
  console.log('JavaScript fonctionne correctement !');
}

// Appel de la fonction pour le test
testJavaScriptFunction();



