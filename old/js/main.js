document.addEventListener('DOMContentLoaded', () => {
  const mobileHeaderButton = document.querySelector('.mobile-header-button')
  const mobileHeader = document.querySelector('.header-right')
  const logo = document.querySelector('.logo')

  mobileHeaderButton.addEventListener('click', () => {
    mobileHeader.classList.toggle('opened-header')
    logo.classList.toggle('closed-logo')
  })

})
