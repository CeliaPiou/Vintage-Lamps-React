import './style.scss'
import React from 'react'
import { useEffect, useState } from 'react'

const Connexion = () => {

  useEffect(() => {

    let signUp = false;

      const buttonSignUp = document.getElementById("btn-signup");
      buttonSignUp.addEventListener('click', () => {

        if (signUp === false) {

          signUp = true;

          const block = document.getElementById('login-signup');
          block.style.flexDirection = "row";

          const signup = document.getElementById('sign-up');
          signup.style.backgroundColor = "white";
          signup.innerHTML = `
          <h2>SIGN UP</h2>
          <form action="post">
          <label for="Email"></label>
          <input id="Email" placeholder='Enter your mail'></input>

          <label for="Password"></label>
          <input id="Password" placeholder='Enter your password'></input>
          </form>

          <button class="btn4 mt-small" type='submit'>CONTINUE</button>
          `

          const login = document.getElementById('login');
          login.innerHTML = `
          <h2>LOGIN</h2>
          <p>Already have an account ?</p>
          <button class="btn4" id="btn-login">LOGIN</button>
          `
          login.style.backgroundColor = "rgb(202, 202, 202)";

        }

      })

      const buttonLogIn = document.getElementById('btn-login');
      buttonLogIn.addEventListener('click', () => {
          signUp = false;

          const block = document.getElementById('login-signup');
          block.style.flexDirection = "reverse-row";

          const signup = document.getElementById('sign-up');
          signup.style.backgroundColor = "rgb(202, 202, 202)";
          signup.innerHTML = `
          <h2>SIGN UP</h2>
          <span>Need an account ?</span>
          <span> <button className='btn4 mt-small' id="btn-signup">SIGN UP !</button></span>
          `

          const login = document.getElementById('login');
          login.innerHTML = `
          <h2>LOGIN</h2>

          <form action="post">
            <label for="Email"></label>
            <input id="Email" placeholder='Enter your mail'></input>

            <label for="Password"></label>
            <input id="Password" placeholder='Enter your password'></input>
          </form>

          <button className="btn4 mt-small" type='submit'>LOGIN</button>
          <p>Forgot password ?</p>
          `
          login.style.backgroundColor = "white";
      })

  }, [])


  return (
    <section id="login-signup">

      <div id="sign-up">
        <h2>SIGN UP</h2>
        <span>Need an account ?</span>
        <span> <button className='btn4 mt-small' id="btn-signup">SIGN UP !</button></span>
      </div>

      <div id="login">
        <h2>LOGIN</h2>

        <form action="post">
          <label for="Email"></label>
          <input id="Email" placeholder='Enter your mail'></input>

          <label for="Password"></label>
          <input id="Password" placeholder='Enter your password'></input>
        </form>

        <button className="btn4 mt-small" type='submit'>LOGIN</button>
        <p>Forgot password ?</p>
      </div>


    </section>
  )
}

export default Connexion