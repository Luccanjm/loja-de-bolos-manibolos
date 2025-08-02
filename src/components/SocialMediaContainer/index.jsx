import './index.css'

import logoFacebook from '../../assets/facebook.png'
import logoYoutube from '../../assets/youtube.png'
import logoInstagram from '../../assets/instagram.png'


function SocialMediaContainer({className}){

    return(
        <div className={`container-social-media ${className}`}>
            <div className='container-logo'>
                <img className='logo' src={logoInstagram} alt='logo instagram'/>
                <a className="link-social-media" href='https://www.instagram.com'>Instagram</a>
            </div>
            <div className='container-logo'>
                <img className='logo' src={logoYoutube} alt='logo youtube' />
                <a className="link-social-media" href='https://www.youtube.com'>Youtube</a>
            </div>
            <div className='container-logo'>
                <img className='logo' src={logoFacebook} alt='logo facebook'/>
                <a className="link-social-media" href='https://www.facebook.com'>Facebook</a>
            </div>
        </div>
    )

}

export default SocialMediaContainer