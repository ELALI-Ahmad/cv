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

// check BOX

document.addEventListener("DOMContentLoaded", function () {
  const webDevCheckbox = document.getElementById("webDevCheckbox");
  const industrialCheckbox = document.getElementById("industrialCheckbox");
  const webDevelopmentExp = document.getElementById("webDevelopmentExp");
  const industrialExp = document.getElementById("industrialExp");

  function updateContent() {
    const webDevChecked = webDevCheckbox.checked;
    const industrialChecked = industrialCheckbox.checked;

    if (webDevChecked && !industrialChecked) {
      webDevelopmentExp.classList.remove("hidden");
      industrialExp.classList.add("hidden");
    } else if (!webDevChecked && industrialChecked) {
      webDevelopmentExp.classList.add("hidden");
      industrialExp.classList.remove("hidden");
    } else if (webDevChecked && industrialChecked) {
      webDevelopmentExp.classList.remove("hidden");
      industrialExp.classList.remove("hidden");
    } else {
      webDevelopmentExp.classList.add("hidden");
      industrialExp.classList.add("hidden");
    }
  }

  // Initially, show web development experiences and check the first checkbox
  webDevCheckbox.checked = true;
  updateContent();

  webDevCheckbox.addEventListener("change", updateContent);
  industrialCheckbox.addEventListener("change", updateContent);
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

