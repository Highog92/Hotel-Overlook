import { Link } from 'react-router-dom';
import navStyle from './nav.module.scss'


export function Navigation() {

    return (
        <section className={navStyle.navigation}>
            <nav>
                <Link to='/homepage'><h2>HOTEL OVERLOOK</h2></Link>
                <ul>
                        <Link to='/homepage'><li>FORSIDE</li></Link>
                        <Link to='/hotel&destinations'><li>HOTELLER & DESTINATIONER</li></Link>
                        <Link to='/rooms'><li>VÆRELSER</li></Link>
                        <Link to='/reservation'><li>RESERVATION</li></Link>
                        <Link to='/loginPage'><li>LOGIN</li></Link>
                        <Link to='/signuppage'><li>SIGNUP</li></Link>
                </ul>
            </nav>
        </section>
    )
}