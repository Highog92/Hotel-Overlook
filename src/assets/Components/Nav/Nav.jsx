import navStyle from './nav.module.scss'
import logo from '../../logo.svg'


import { Link } from 'react-router-dom';

export function Navigation() {

    return (
        <section className={navStyle.navigation}>
            <nav>
                {/* Link er bare et <a> tag */}
                <Link to='/homepage'><img src={logo} alt="" /></Link>
                <ul>
                    <Link to='/homepage'><li>FORSIDE</li></Link>
                    <li className={navStyle.pipes}>|</li>
                    <Link to='/hotel&destinations'><li>HOTELLER & DESTINATIONER</li></Link>
                    <li className={navStyle.pipes}>|</li>
                    <Link to='/rooms'><li>VÆRELSER</li></Link>
                    <li className={navStyle.pipes}>|</li>
                    <Link to='/reservation'><li>RESERVATION</li></Link>
                    <li className={navStyle.pipes}>|</li>
                    <Link to='/loginPage'><li>LOGIN</li></Link>
                    <li className={navStyle.pipes}>|</li>
                    <Link to='/signuppage'><li>SIGNUP</li></Link>
                </ul>
            </nav> 
        </section>
    )
}