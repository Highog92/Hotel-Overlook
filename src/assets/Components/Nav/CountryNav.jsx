import { Link } from "react-router-dom"
import countryNavStyle from "./CountryNav.module.scss"

export function CountryNav() {

  return (
    <section>
      <nav className={countryNavStyle.countryNavigation}>
        <ul>
          <Link to='/denmark'><li>Danmark</li></Link>
          <Link to='/sweden'><li>Sweden</li></Link>
          <Link to='/norway'><li>Norway</li></Link>
          <Link to='/finland'><li>Finland</li></Link>
          <Link to='/island'><li>Island</li></Link>
          <Link to='/germany'><li>Germany</li></Link>
          <Link to='/poland'><li>Poland</li></Link>
        </ul>
      </nav>
    </section>
  )
}
