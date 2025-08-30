import React, {useState} from 'react'
import './style.scss'
import axios from 'axios'
import { API_URL } from '../../api'


const Contact = () => {

  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
    console.log(name, value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // console.log('Vérification du form prêt à être envoyer: ', form)
      // console.log(`Vérification de lurl pour axios : ${API_URL}/lv/contact/add`)
      await axios.post(`${API_URL}/lv/contact/add`, form)
      setStatus("Message envoyé avec succès !")

    } catch (err) {
      console.error(err)
      setStatus("Erreur lors de l'envoi.")
    }
  }

  return (
    <section id="contact" className='container'>
      <div>
        <h2>Reach out to me!</h2>
        <p>Feel free to contact me, for any specific research, demand, or question.</p>

        <p>leydier2020@email.fr</p>
        <p>+33 6 62 xx 28 83</p>
        <p>Subway Jaures, Paris</p>

      </div>


      <form onSubmit={handleSubmit}>

        <label for="name">Your Name</label>
        <input
          id="name"
          name='name'
          type='text'
          placeholder='Your name'
          required
          onChange={handleChange} />

        <label for="email">Your Email</label>
        <input
          id="email"
          name='email'
          type='email'
          placeholder='Your e-mail'
          required
          onChange={handleChange} />

        <label for="message"><i class="fa fa-paper-plane fa-5x" aria-hidden="true"></i>Your Message</label>
        <textarea
          id="message"
          name='message'
          type='text'
          placeholder='Your message'
          required
          onChange={handleChange} />

        <button className='btn4' type='submit'><svg wisth="20px" xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>SEND</button>

      </form>

      {status && <p>{status}</p>}

    </section>
  )
}

export default Contact