document.addEventListener("DOMContentLoaded", function () {

const languageToggleCheckbox = document.getElementById("languageToggle");
  languageToggleCheckbox.addEventListener("change", toggleLanguage);
});

document.querySelectorAll('.learn-more').forEach(function(button) {
  button.addEventListener('click', function() {
    var cardId = this.getAttribute('data-card');
    var version = this.getAttribute('data-version');
    toggleLearnMore(cardId, version);
  });
});


// CV language version

// Function to show language buttons
function showLanguageButtons() {
  var languageButtons = document.getElementById("languageButtons");
  if (languageButtons.style.display === "none" || languageButtons.style.display === "") {
      languageButtons.style.display = "block";
  } else {
      languageButtons.style.display = "none";
  }
}

// Function to download CV
function downloadCV(language) {
  // Modify this function to handle CV download based on the selected language.
  // You can use a conditional statement to select the appropriate CV file.
  if (language === "French") {
      window.open("./assets/CV Ahmad EL ALI Fr.pdf", "_blank");
  } else if (language === "English") {
      window.open("./assets/CV Ahmad EL ALI Eng.pdf", "_blank");
  }
}

// Function to toggle "Learn More" details
function toggleLearnMore(cardId, language) {
  var card = document.getElementById(cardId);
  var hiddenList = card.querySelector(".hidden");

  if (hiddenList.style.display === "block") {
      hiddenList.style.display = "none";
  } else {
      hiddenList.style.display = "block";
  }
}


// site language

function toggleLanguage() {
  const checkbox = document.getElementById("languageToggle");
  const englishContent = document.querySelector(".english-content");
  const frenchContent = document.querySelector(".french-content");

  if (checkbox.checked) {
    englishContent.style.display = "block";
    frenchContent.style.display = "none";
  } else {
    englishContent.style.display = "none";
    frenchContent.style.display = "block";
  }
}

// Your JavaScript code here
    // For example, you can add the dark mode functionality directly

    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });



// for courses
const showCoursesButtons = document.querySelectorAll('.show-courses');
const coursesLists = document.querySelectorAll('.courses-list');

showCoursesButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        coursesLists[index].classList.toggle('hidden-courses');
    });
});

const modal = document.getElementById('modal');
const close = document.querySelector('.close');
const coursEnCoursLinks = document.querySelectorAll('ul.courses-list a[target="_blank"][href="#"]');

// Show the modal when clicking on "Certificat en cours"
coursEnCoursLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        modal.style.display = 'block';
    });
});

// Close the modal when clicking on the close button
close.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside of it
window.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  function scrollToSection(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1); // Remove the '#' character
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth", // Smooth scrolling animation
      });
    }
  }
});

// show more and less experiences

// $(document).ready(function () {
//   // Attach a click event handler to all show-more-btn elements
//   $(".show-more-btn").click(function () {
//     // Find the parent card and its hidden ul
//     var card = $(this).closest(".card--work-history");
//     var ul = card.find("ul.hidden");

//     // Hide all other open lists
//     $(".card--work-history ul:not(.hidden)").addClass("hidden");

//     // Toggle the visibility of the ul and update the button text
//     ul.toggleClass("hidden");
    
//   });
// });

function toggleLearnMore(cardId, version) {
  var card = document.getElementById(cardId);
  var ul = card.querySelector("ul");

  if (ul.style.display === "block") {
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
  }

  // Check if it's the French version and update the button text accordingly
  if (version === "French") {
    var buttonText = ul.style.display === "block" ? "Réduire" : "Learn More";
    card.querySelector(".button-text").textContent = buttonText;
  }
}





