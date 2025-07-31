import {Link} from 'react-router-dom'

import './index.css'

function NavMenu(props){
    return(
        <div className='container-menu'>
           <nav className={`menu-nav ${props.menuHidden ? 'menu-nav-open' : 'menu-nav-closed'}`}>
                <ul className='list-menu'>
                    <li className='line-menu'>
                        <Link className='link-menu' to="/">Página Principal</Link>
                    </li>
                    <li className='line-menu'>
                        <Link className='link-menu' to="/bolos">Bolos</Link>
                    </li>
                    <li className='line-menu'>
                        <Link className='link-menu' to="/monte-seu-bolo">Monte seu bolo</Link>
                    </li>
                    <li className='line-menu'>
                        <Link className='link-menu' to="/como-chegar">Como Chegar?</Link>
                    </li>
                    <li className='line-menu'>
                        <Link className='link-menu' to="/contato">Contato</Link>
                    </li>
                </ul>
            </nav> 
        </div>
    )
}

export default NavMenu