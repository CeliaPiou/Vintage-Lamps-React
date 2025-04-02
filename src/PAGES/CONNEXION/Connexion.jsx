import './style.scss'
import React, { useState } from 'react'
import gradient from '../../assets/img/gradient.svg'

import SeConnecter from './SeConnecter';
import Sinscrire from './Sinscrire';

const Connexion = () => {
  const [signUp, setSignUp] = useState(false);

  const handleClickSignIn = () => {
    setSignUp(false);
  };

  const handleClickSignUp = () => {
    setSignUp(true);
  };

  return (

    // Pour inverser les blocks : style={{ flexDirection: signUp ? "row" : "row-reverse" }}
    <section id="login-signup">

      {/* == Tu veux t'inscrire ? */}
      <div id="sign-up" style={{ backgroundColor: signUp ?  "rgb(255, 202, 29)" : "white",
      width: signUp ? "50vw" : "30vw"}}>
        <h2>SIGN UP</h2>
        {signUp ? (

          // == Soit tu t'inscris, formulaire pour s'inscrire
          < Sinscrire />
        ) : (

          // == Soit juste un bouton pour faire apparaitre le formulaire de connexion
          <>
            <span>Need an account?</span>
            <span>
              <button className="btn4 mt-small" onClick={handleClickSignUp} id="btn-signup">
                <img
                  src={gradient}
                  width={500}
                  className='btn-effect'></img>
                SIGN UP!
              </button>
            </span>
          </>
        )}
      </div>

      {/* == Tu veux te connecter ? */}
      <div id="login" style={{ backgroundColor: signUp ? "white" : "rgb(255, 202, 29)",
        width: signUp ? "30vw" : "50vw"
       }}>
        <h2>LOGIN</h2>
        {signUp ? (

          // == Soit bouton pour faire apparaitre le formulaire d'inscription
          <>
            <p>Already have an account?</p>
            <button className="btn4" id="btn-login" onClick={handleClickSignIn}>
              <img
                src={gradient}
                width={500}
                className='btn-effect'>
              </img>
              LOGIN
            </button>
          </>
        ) : (

          // == Soit formulaire pour se connecter
          < SeConnecter />

        )}
      </div>
    </section>
  );
};

export default Connexion;
