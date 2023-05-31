import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js';


import firebaseConfig from './config.js';

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("login").addEventListener("click", logar)

function logar() {
  signInWithPopup(auth, provider)
    .then((result) => {

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
      console.log(result);

      const signup = document.getElementById('signup')
      const welcome = document.getElementById('welcome')

      welcome.style.display = 'flex'
      signup.style.display = 'none'

      welcome.innerHTML = `<div class="card-body d-flex flex-column gap-5" >
                          <div class="auth d-flex flex-column align-items-center">
                              <img src="img/firebase.svg" alt="">
                              <p class="title">Firebase Auth</p>
                              <h5>Bem vindo</h5>
                          </div>
      <button class="btn d-flex align-items-center justify-content-center gap-3"><img  class="rounded" id="img-user" src="${result._tokenResponse.photoUrl}" alt="">${result.user.displayName}</button>
  </div>`

    }).catch((error) => {
      console.log(error);

      const errorCode = error.code;
      const errorMessage = error.message;

      const email = error.customData.email;

      const credential = GoogleAuthProvider.credentialFromError(error);

    });



}