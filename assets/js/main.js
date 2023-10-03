/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

function changep(){
    document.getElementById("projectbtn").setAttribute("class","filters__button filter-tab-active")
    document.getElementById("skillbtn").setAttribute("class","filters__button ")
    document.getElementById("aboutbtn").setAttribute("class","filters__button ")
    document.getElementById("projects").setAttribute("class","projects__content grid filters__active")
    document.getElementById("skills").setAttribute("style","display: none")
    document.getElementById("skills").setAttribute("class","skills__content grid no")
    document.getElementById("about").setAttribute("class","skills__content grid no ")
}
function changea(){
    document.getElementById("skillbtn").setAttribute("class","filters__button ")
    document.getElementById("projectbtn").setAttribute("class","filters__button ")
    document.getElementById("aboutbtn").setAttribute("class","filters__button filter-tab-active")
    document.getElementById("projects").setAttribute("class","projects__content grid no")
    document.getElementById("skills").setAttribute("class","skills__content grid no")
    document.getElementById("about").setAttribute("class","skills__content grid filters__active")
    document.getElementById("skills").setAttribute("style","display: none")

}
function changes(){
    document.getElementById("skillbtn").setAttribute("class","filters__button filter-tab-active")
    document.getElementById("projectbtn").setAttribute("class","filters__button ")
    document.getElementById("aboutbtn").setAttribute("class","filters__button ")
    document.getElementById("skills").setAttribute("class","skills__content grid filters__active skilldiv")
    document.getElementById("skills").setAttribute("style","display: flex")
    document.getElementById("projects").setAttribute("class","skills__content grid ")
    document.getElementById("about").setAttribute("class","skills__content grid no")

}


/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay: 500})
sr.reveal(`.profile__profession`, {delay: 600})
sr.reveal(`.profile__social`, {delay: 700})
sr.reveal(`.profile__info-group`, {interval: 100, delay: 700})
sr.reveal(`.profile__buttons`, {delay: 800})
sr.reveal(`.filters__content`, {delay: 900})
sr.reveal(`.filters`, {delay: 1000})


// ----------- - - - - - - - - - - - - - - - -

/// Check if the visitor count is already stored in localStorage
let visitorCount = localStorage.getItem("visitorCount");

if (visitorCount === null) {
  // If not, set the initial count to 1
  visitorCount = 1;
} else {
  // If yes, parse the stored count from a string to a number and increment it by 1
  visitorCount = parseInt(visitorCount) + 1;
}

// Store the updated count in localStorage
localStorage.setItem("visitorCount", visitorCount);

// Update the counter element with the visitor count
document.getElementById("visitor-count").textContent = visitorCount;
