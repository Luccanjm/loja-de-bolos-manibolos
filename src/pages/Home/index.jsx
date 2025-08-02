import { useState } from "react"
import ApresentationContainer from "../../components/ApresentationContainer"
import NavBar from "../../components/NavBar"

import './index.css'
import ProductsContainer from "../../components/ProductsContainer";

function Home() {
    const [menuHidden, setMenuHidden] = useState(false);

    return(
        <div className={`container-home ${!menuHidden ? 'closed' : 'open'}`}>
        <NavBar menuHidden={menuHidden} onToggleMenu={() => setMenuHidden(!menuHidden)} className="navbar"/>
        <ApresentationContainer className="apresentation-container"/>
        <ProductsContainer className="products-container"/>
        </div>
    )
}

export default Home