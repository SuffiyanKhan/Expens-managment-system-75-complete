// import {  sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";
// import { app } from "./config.js";

import { updatePassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


let sent_email = document.querySelector("#sent_email")
let forgot_email = document.querySelector("#forgot_email")
sent_email.addEventListener('click',()=>{

  // const user = auth.currentUser;
  // const newPassword = getASecureRandomPassword();
  
  // updatePassword(user, newPassword).then(() => {
  //   alert('Update successful')
  //   // Update successful.
  // }).catch((error) => {
  //   alert(error)
  //   // An error ocurred
  //   // ...
  // });



    alert('Check your Email and change Password')
    document.querySelector('#para').style.display = 'block';
  document.querySelector('.contan').style.display='none';
    sendPasswordResetEmail(auth, forgot_email.value)
  .then(() => {
    forgot_email = ""
    console.log("congratulation reset confirmation email sent successfully")
    // alert('congratulation reset confirmation email sent successfully')
    // window.location= 'login.html'
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });

})
// sent_email.addEventListener('click',()=>{
  
// })