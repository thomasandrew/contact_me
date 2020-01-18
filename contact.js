const sidebar = document.getElementById('sidebar')
const toggle_btn = document.querySelector('.toggle-btn')

toggle_btn.onclick = function() {
   sidebar.classList.toggle('active')
}

const name = document.getElementById('name')
const email = document.getElementById('email')
const mgs = document.getElementById('msg')
const erro = document.querySelector('.erro')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
   if (name.value === "") {
      erro.innerHTML = "No name"
      erro.style.color = 'red'
      erro.style.display = 'flex'
      name.focus()
      return false
   } else {
      erro.innerHTML = ""
      erro.style.display = 'none'
   }

   if (email.value === "") {
      erro.innerHTML = "No email"
      erro.style.display = 'flex'
      erro.style.color = 'red'
      email.focus()
      return false
   } else {
      erro.innerHTML = ""
      erro.style.display = 'none'
   }

   if (msg.value === "") {
      erro.innerHTML = "No msg"
      erro.style.display = 'flex'
      erro.style.coolor = 'red'
      msg.focus()
      return false
   } else {
      erro.innerHTML = ""
      erro.style.display = 'none'
   }

})
