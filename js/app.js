/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables*
 *  
*/
const navbar = document.querySelector('#navbar__list')
const sections = document.querySelectorAll('section')


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createNavLinks = () => {
    for (let item of sections) {
        let button = document.createElement('button');
        button.className = 'menu__link'
        button.id = item.id + '-link'
        button.innerText = item.dataset.nav
        navbar.appendChild(button);
    }
}

// Add class 'active' to section when near top of viewport
setActive = () => {

    for (section of sections) {

        let bounding = section.getBoundingClientRect()

        if (bounding.bottom > 150 & bounding.top < 150) {
            document.querySelector('#' + section.id).classList.add('your-active-class')
            document.querySelector(`#${section.id}-link`).classList.add('active-link')
        }
        else{
            document.querySelector('#' + section.id).classList.remove('your-active-class')
            document.querySelector(`#${section.id}-link`).classList.remove('active-link')
        }
    }

    navbar.style.display = 'none'
    setTimeout(() =>{
        navbar.style.display = "block"
    }, 1000)
}

// Scroll to anchor ID using scrollTO event
scrollToSection = () =>{
    navbar.addEventListener('click', function (event) {
        if(event.target.tagName === 'BUTTON'){
            const clicked = document.querySelector('#'+ event.target.id.slice(0,-5))
            clicked.scrollIntoView({behavior: "smooth"})
        }
    event.preventDefault() 
    })
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createNavLinks();
// Scroll to section
scrollToSection();
// Set sections as active
window.addEventListener('scroll', setActive);

