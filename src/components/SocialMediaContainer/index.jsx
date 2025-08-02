import './index.css'

import logoFacebook from '../../assets/facebook.png'
import logoYoutube from '../../assets/youtube.png'
import logoInstagram from '../../assets/instagram.png'


function SocialMediaContainer({className}){

    return(
        <div className={`${className}`}>
            <h1>Redes Sociais</h1>
            <div className="container-links-social-media">
                    <a className="link-social-media" target='_blank' href='https://www.instagram.com'>
                        <img className='logo' src={logoInstagram} alt='logo instagram'/>
                        Instagram
                    </a>
                    <a className="link-social-media" target='_blank' href='https://www.youtube.com'>
                        <img className='logo' src={logoYoutube} alt='logo youtube' />
                        Youtube
                    </a>
                    <a className="link-social-media" target='_blank' href='https://www.facebook.com'>
                        <img className='logo' src={logoFacebook} alt='logo facebook'/>
                        Facebook
                    </a>
            </div>
        </div>
    )

}

export default SocialMediaContainer