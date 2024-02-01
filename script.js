// select elements
const hamburgerButton = document.querySelector(".hamburger-button")
const navigationMenu = document.querySelector(".navigation-menu")

hamburgerButton.addEventListener("click", () => {
    toggleMenu()
})

function toggleMenu() {
    if (hamburgerButton.classList.contains("menu-open")) {
        hamburgerButton.classList.remove("menu-open")
        navigationMenu.classList.remove("menu-active")
    } else {
        hamburgerButton.classList.add("menu-open")
        navigationMenu.classList.add("menu-active")
    }
}