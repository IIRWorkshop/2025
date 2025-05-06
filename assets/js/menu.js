// Fix hamburger menu functionality for mobile
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById("hamburgerbtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const body = document.body;

  if (hamburger) {
    // Clear any previous event listeners
    hamburger.replaceWith(hamburger.cloneNode(true));
    const refreshedHamburger = document.getElementById("hamburgerbtn");
    
    refreshedHamburger.addEventListener("click", function(e) {
      e.preventDefault();
      mobileMenu.classList.toggle("open");
      body.classList.toggle("scroll-lock");
      
      // Toggle between menu and close icons
      const iconSpan = refreshedHamburger.querySelector('.material-icons');
      if (iconSpan) {
        if (mobileMenu.classList.contains('open')) {
          iconSpan.textContent = 'close';
        } else {
          iconSpan.textContent = 'menu';
        }
      }
    });
  }

  // Close mobile menu when clicking outside of it
  document.addEventListener('click', function(e) {
    const refreshedHamburger = document.getElementById("hamburgerbtn");
    if (mobileMenu && mobileMenu.classList.contains('open') && 
        !mobileMenu.contains(e.target) && 
        e.target !== refreshedHamburger && 
        !refreshedHamburger.contains(e.target)) {
      
      mobileMenu.classList.remove('open');
      body.classList.remove('scroll-lock');
      
      // Reset hamburger icon
      const iconSpan = refreshedHamburger.querySelector('.material-icons');
      if (iconSpan) {
        iconSpan.textContent = 'menu';
      }
    }
  });
});