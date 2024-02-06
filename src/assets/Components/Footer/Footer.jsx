import style from "./Footer.module.scss";
import navStyle from '.././Nav/nav.module.scss'


export const Footer = () => {
  return (
    <footer className={style.footerStyle}>
      <p>© 2021 Hotel Overlook. Alle rettigheder forbeholdt.</p>


      <section className={navStyle.navigation}>
        <nav>
          
          <ul>
            <Link to='/homepage'><li>FORSIDE</li></Link>
            <Link to='/hotel&destinations'><li>HOTELLER & DESTINATIONER</li></Link>
            <Link to='/rooms'><li>VÆRELSER</li></Link>
            <Link to='/reservation'><li>RESERVATION</li></Link>
            <Link to='/login'><li>LOGIN</li></Link>
          </ul>
        </nav>
      </section>
    </footer>
  );
};
