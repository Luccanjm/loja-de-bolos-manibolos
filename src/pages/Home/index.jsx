import ApresentationContainer from "../../components/ApresentationContainer"
import NavBar from "../../components/NavBar"

import './index.css'

const Home = () => {
    return(
        <div className="container-home">
        <NavBar className="navbar"/>
        <ApresentationContainer className="apresentation-container"/>
        </div>
    )
}

export default Home