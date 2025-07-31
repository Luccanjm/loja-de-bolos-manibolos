import NavMenu from '../NavMenu'

import cart from '../../assets/cart.svg'
import menu from '../../assets/menu.svg'
import closeButton from '../../assets/close-button.svg'

import './index.css'
import { useState } from 'react'

function NavBar(){
    const [menuHidden, setMenuHidden] = useState(true);

    function setVisibilityMenu() {
        if(menuHidden === true){
            setMenuHidden(false);

        }else{
            setMenuHidden(true);
        }
    }



    return(
    <div className="container-nav">  
      <nav className="nav-manibolos">
        <div className={`menu ${menuHidden ? 'menu-open' : 'menu-closed'}`}>
            {menuHidden ? 
            <button className='button-img-close' onClick={setVisibilityMenu}>
                <img className='close-button' src={closeButton} alt='close button menu'/> 
            </button>
            : 
            <button className='button-img' onClick={setVisibilityMenu}>
                <img src={menu} alt="menu hamburguer" className='menu-img'/>
            </button>}
            
        </div>
        <div className="container-title">
            <h1>ManiBolos</h1>
        </div>
        <div className='container-cart'>
            <img className='cart-img' src={cart} alt='cart' />
        </div>
        </nav>

        {menuHidden ? <NavMenu menuHidden={menuHidden}/> : <></> }

    </div>
    )
}

export default NavBar