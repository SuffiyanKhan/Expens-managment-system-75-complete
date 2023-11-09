


import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from './config.js';
let log_out = document.querySelector('#log_out');
log_out.addEventListener('click',()=>{
signOut(auth).then(() => {
  // Sign-out successful.  
  console.log('user logout successfully');
  window.location = 'signup.html'
}).catch((error) => {
  // An error happened.  
  console.log(error)
});
})
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    const email = user.email
    // user.displayName='suffiyan'
    console.log(uid)
    console.log(email)

    // console.log(user.displayName)
    console.log(user)
    document.querySelector('#email').innerHTML ='Email :'+ email            
  } else {
    window.location = 'login.html'
  }  
});  


