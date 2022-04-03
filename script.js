const password = document.querySelector("#user-password")
const confirmPassword = document.querySelector("#user-confirm-password")
const spanMatch = document.querySelector(".match")
const btn = document.querySelector(".btn")

confirmPassword.addEventListener('input', () => {
  if (confirmPassword.value != password.value) {
    spanMatch.textContent = '* Password do not match'
    password.className = confirmPassword.className = 'wrong'
    btn.setAttribute('disabled', true)
  } else {
    btn.removeAttribute('disabled')
    password.classList.remove('wrong')
    confirmPassword.classList.remove('wrong')
    spanMatch.textContent = ' '
  }
})
