import NavMenu from '../NavMenu'

import cart from '../../assets/cart.svg'
import menu from '../../assets/menu.svg'
import closeButton from '../../assets/close-button.svg'

import './index.css'
import { useState } from 'react'

function NavBar({className = '', onToggleMenu, menuHidden}){

    return(
    <div className={`container-nav ${className}`}>  
      <nav className="nav-manibolos">
        <div className={`menu ${menuHidden ? 'menu-open' : 'menu-closed'}`}>
            {menuHidden ? 
            <button className='button-img-close' onClick={onToggleMenu}>
                <img className='close-button' src={closeButton} alt='close button menu'/> 
            </button>
            : 
            <button className='button-img' onClick={onToggleMenu}>
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

        <NavMenu menuHidden={menuHidden}/>

    </div>
    )
}

export default NavBar