import { Link } from "react-router-dom";
import style from "./Footer.module.scss";
import facebook from '../../../assets/Facebook.svg'
import XTwitter from '../../../assets/XTwitter.svg'


export const Footer = () => {
  return (
    <footer className={style.footerStyle}>
      <p>© 2021 Hotel Overlook. Alle rettigheder forbeholdt.</p>

      <div className={style.socials}>
        <img src={facebook} alt="Facebook" />
        <img src={XTwitter} alt="Twitter" />
      </div>

      <nav>
        <ul>
          <Link to='/homepage'><li>FORSIDE</li></Link>
          <Link to='/hotel&destinations'><li>HOTELLER & DESTINATIONER</li></Link>
          <Link to='/rooms'><li>VÆRELSER</li></Link>
          <Link to='/reservation'><li>RESERVATION</li></Link>
          <Link to='/login'><li>LOGIN</li></Link>
        </ul>
      </nav>
    </footer>
  );
};
