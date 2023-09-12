// Get the navbar element
const navbar = document.querySelector('.navbar');

// Track the previous scroll position
let prevScrollPos = window.pageYOffset;
  
// Function to toggle the navbar visibility
const toggleNavbar = () => {
  const currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up, show the navbar
    navbar.classList.remove('hide-navbar');
  } else {
    // Scrolling down, hide the navbar
    navbar.classList.add('hide-navbar');
  }
  
  prevScrollPos = currentScrollPos;
};

// Attach the toggleNavbar function to the window's scroll event
window.addEventListener('scroll', toggleNavbar);
