let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

// Define functions
const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()
// Conditional statement to use functions based on current theme
themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ?enableDarkmode() : disableDarkMode()
})