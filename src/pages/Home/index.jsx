import { useState } from "react"

import ApresentationContainer from "../../components/ApresentationContainer"
import NavBar from "../../components/NavBar"
import ProductsContainer from "../../components/ProductsContainer";
import SocialMediaContainer from "../../components/SocialMediaContainer";
import './index.css'
import ContactContainer from "../../components/ContactContainer";
import Footer from "../../components/Footer";

function Home() {
    const [menuHidden, setMenuHidden] = useState(false);

    return(
        <div className={`container-home ${!menuHidden ? 'closed' : 'open'}`}>
        <NavBar menuHidden={menuHidden} onToggleMenu={() => setMenuHidden(!menuHidden)} className="navbar"/>
        <ApresentationContainer className="apresentation-container"/>
        <ProductsContainer className="products-container"/>
        <SocialMediaContainer className="social-media-container"/>
        <ContactContainer className="contact-container" />
        <Footer className="footer-container"/>
        </div>
    )
}

export default Home