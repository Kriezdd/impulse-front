import {Link, useLocation} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll'
import logo from '../../images/logo.png';
import './Header.scss';
import {useState} from "react";
import Burger from "$components/Header/elements/Burger.jsx";
import Close from "$components/Header/elements/Close.jsx";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  const {pathname} = location;

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="header">
      <nav className="header__container wrapper">
        {
          pathname === "/impulse-front/" ?
            <>
              <ScrollLink
                activeClass="active"
                smooth spy to="root"
                duration={300}
                offset={-200}
                className="Header-LogoContainer logo">
                <img src={logo} alt="logopic" className="logo-img"/>
                <h3 className="logo-title">Импульс</h3>
              </ScrollLink>
              {
                !showNav ?
                  <Burger toggleNav={toggleNav}/> :
                  <Close toggleNav={toggleNav}/>
              }
              <div className={`nav-items__container ${showNav && "active"}`}>
                <ul className="nav-items">
                  <li>
                    <ScrollLink
                      activeClass="active"
                      smooth spy to="projects"
                      duration={300}
                      offset={-150}
                    >
                      Проекты
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      activeClass="active"
                      smooth spy to="team"
                      duration={300}
                      offset={-150}
                    >
                      Команда
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      activeClass="active"
                      smooth spy to="contacts"
                      duration={300}
                      offset={-150}
                    >
                      Контакты
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      activeClass="active"
                      smooth spy to="gallery"
                      duration={300}
                      offset={-150}
                    >
                      Галерея
                    </ScrollLink>
                  </li>
                </ul>
              </div>
            </>
            :
            <>
              <Link to="/impulse-front/" className="Header-LogoContainer logo">
                <img src={logo} alt="logopic" className="logo-img"/>
                <h3 className="logo-title">Импульс</h3>
              </Link>
              <div className="additional__nav-items">
                <div className="additional__back-phrase">
                  <Link to="/impulse-front/">Вернуться на главную</Link>
                </div>
              </div>
            </>
        }
        {}

      </nav>
    </header>
  )
    ;
};

export default Header;