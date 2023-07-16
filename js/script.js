/*===== SHOW MENU =====*/
const toggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

  function closeMenu() {
    if (navMenu.classList.contains('show-menu')) {
      navMenu.classList.remove('show-menu');
    }
  }

/*===== CLOSE MENU =====*/
  document.addEventListener('click', function(event) {
    const target = event.target

    if (!target.closest('.nav')) {
      closeMenu()
    }
  })

  toggle.addEventListener('click', function() {
    navMenu.classList.toggle('show-menu')
  })

  const navLinks = document.querySelectorAll('.nav_link');

  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function() {
      closeMenu()
    })
  })

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== CHANGE BACKGROUND HEADER =====*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header');else header.classList.remove ('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*===== SHOW SCROLL TOP =====*/
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');else scrollTop.classList.remove ('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*===== GSAP ANIMATION =====*/
gsap.from('.about_img', {opacity: 0, duration: 2, delay: .5, x: 60})
gsap.from('.about_data', {opacity: 0, duration: 2, delay: .8, y: 25})
gsap.from('.about_greeting, about_profession, about_scroll', {opacity: 0, duration: 2, delay: 1, y: 25, ease: 'expo.out', stagger: .2})
gsap.from('.nav_logo, .nav_toggle', {opacity: 0, duration: 2, delay: 1.5, y: 25, ease: 'expo.out', stagger: .2})
gsap.from('.nav_item', {opacity: 0, duration: 2, delay: 1.8, y: 25, ease: 'expo.out', stagger: .2})


/*===== LAZY LOADING =====*/
// Select all the project card images
const projectImages = document.querySelectorAll('.project_card img');

// Options for the Intersection Observer
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Adjust the threshold value as needed
};

// Function to handle the intersection changes
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Load the image source from the data-src attribute
            entry.target.src = entry.target.dataset.src;
            entry.target.classList.add('loaded');
            observer.unobserve(entry.target);
        }
    });
}

// Create a new Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Observe each project card image
projectImages.forEach(image => {
    observer.observe(image);
});