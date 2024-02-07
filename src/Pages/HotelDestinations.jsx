import { Link } from "react-router-dom"
import HotelDestinationsStyle from './Styles/HotelDestinations.module.scss'

export function HotelsDestinations() {

  return (
    <section className={HotelDestinationsStyle.HotelDestinations}>

      <nav className={HotelDestinationsStyle.countryNavigation}>
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
      <h2>Hotel & Destinations</h2>


    </section>
  )
}
