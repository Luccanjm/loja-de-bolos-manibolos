import './index.css'

import logoWhatsapp from '../../assets/whatsapp.png'
import logoGmail from '../../assets/gmail.png'

function ContactContainer({className}){
    return(
        <div className={`${className}`}>
            <h1>Contatos</h1>
            <div className="container-contact">
                <a target='_blank' href="https://api.whatsapp.com/send/?phone=55&text&type=phone_number&app_absent=0" className="link-contact">
                    <img className='logo' src={logoWhatsapp} alt="logo whatsapp" />
                    Whatsapp
                </a>
                <a target='_blank' href="https://mail.google.com/mail/?view=cm&to=example@example.com" className="link-contact">
                    <img className='logo' src={logoGmail} alt="logo gmail" />
                    Gmail
                </a>
            </div>
        </div>
    )
}

export default ContactContainer