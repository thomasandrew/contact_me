const nav = document.querySelector('.nav-menu');
const close = document.querySelector('.close');

document.querySelector(".unicode").addEventListener('click', function () {
   nav.style.display = 'flex';
})

close.onclick = () => {
   nav.style.display = 'none';
} 

btn.onclick = function () {

   const name = document.getElementById('name');
   const email = document.getElementById('email');
   const erro = document.querySelector('.erro');
   const msg = document.getElementById('msg');
   const btn = document.getElementById('btn');

   if (name.value === "") {
      erro.style.display = 'block';
      erro.innerHTML = "Name cannot be blank"
      name.focus()
      return false
   } else {
      erro.style.display = 'none';
   }

   if (email.value === "") {
      erro.style.display = 'flex'
      erro.innerHTML = "Email cannot be blank"
      email.focus()
      return false
   } else {
      erro.style.display = 'none'
   }

   if (msg.value === "") {
      erro.style.display = 'flex'
      erro.innerHTML = "Please leave your message"
      msg.focus()
      return false
   } else {
      erro.style.display = 'none'
   }


} 
