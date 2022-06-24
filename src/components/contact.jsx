import { useState } from 'react'
import "../Assets/css/contact.css"
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-5'>
            <div className='row'>
              <div className='section-title'>
                <h2>Bize Ulaşın</h2>
                <p>
                  Bize bir e-posta göndermek için lütfen aşağıdaki formu doldurun;
                  en kısa sürede size geri dönelim.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='İsim'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Mesajınız'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Mail Gönder
                </button>
              </form>
            </div>
          </div>

          <div className='col-md-2 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>İletişim Bilgileri</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Adres
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Telefon
                </span>{' '}
                <p> {props.data ? props.data.phone1 : 'loading'}</p>
                <p> {props.data ? props.data.phone2 : 'loading'}</p>
                <p> {props.data ? props.data.phone3 : 'loading'}</p>

              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                <p>{props.data ? props.data.email1 : 'loading'}</p> 
                <p> {props.data ? props.data.email2 : 'loading'}</p>
              </p>
            </div>
          </div>

          <div style={{minWidth:'180px'}} className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item workhours'>
              <h3 >Çalışma Saatleri</h3>
              <div style={{display:'inline-block'}}>
                <span>Salı  </span>
                <span>Çarşamba </span>
                <span>Perşembe </span>
                <span>Cuma  </span>
                <span>Cumartesi  </span>
                <span>Pazar  </span>
                <span>Pazartesi   </span>
              </div>
              <div style={{display:'inline-block', marginLeft:'30px'}} >
                <span>09:00-18:00</span>
                <span>09:00-18:00</span>
                <span>09:00-18:00</span>
                <span>09:00-18:00</span>
                <span>09:00-18:00</span>
                <span>Kapalı</span>
                <span>Kapalı</span>
              </div>

            </div>
          </div>

          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : '/'}>
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.gmail : '/'}>
                      <i className='fa fa-envelope'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}
