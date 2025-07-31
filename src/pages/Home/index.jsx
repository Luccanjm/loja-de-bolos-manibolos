import { useState } from "react"
import ApresentationContainer from "../../components/ApresentationContainer"
import NavBar from "../../components/NavBar"

import './index.css'

function Home() {
    const [menuHidden, setMenuHidden] = useState(true);

    return(
        <div className={`container-home ${!menuHidden ? 'closed' : 'open'}`}>
        <NavBar menuHidden={menuHidden} onToggleMenu={() => setMenuHidden(!menuHidden)} className="navbar"/>
        <ApresentationContainer className="apresentation-container"/>
        </div>
    )
}

export default Home