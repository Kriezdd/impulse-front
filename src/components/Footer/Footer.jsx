import {Link, useLocation} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import logo from "../../images/logo.png";
import phone from "../../images/util_icons/phone.png";
import './Footer.scss';


const Footer = () => {
  const location = useLocation();
  const {pathname} = location;

  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer__container">
          <div className="footer__content naming">
            {
              pathname === "/" ?
                <ScrollLink
                  activeClass="active"
                  smooth spy to="root"
                  duration={300}
                  offset={-200}
                  className="logo"
                  // todo: tabindex is not working in react-scroll
                  tabIndex="0">
                  <img src={logo} alt="logopic" className="logo-img"/>
                  <h3 className="logo-title footer-text">Импульс</h3>
                </ScrollLink> :
                <Link to="/" className="logo">
                  <img src={logo} alt="logopic" className="logo-img"/>
                  <h3 className="logo-title footer-text">Импульс</h3>
                </Link>
            }

            <div className="naming-description">
              <p className="small-text">© Импульс 2024</p>
              <p className="xs-text">ИП Обертяева Карина Владимировна</p>
            </div>
          </div>
          <div className="footer__content sections">
            <h4 className="small-text">Разделы:</h4>
            <ul className="footer__nav">
              <ScrollLink
                activeClass="active"
                smooth spy to="projects"
                duration={300}
                offset={-150}
                tabIndex="0"
              >
                <li className="small-text footer__nav-item">Проекты</li>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                smooth spy to="team"
                duration={300}
                offset={-150}
                tabIndex="0"
              >
                <li className="small-text footer__nav-item">Команда</li>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                smooth spy to="gallery"
                duration={300}
                offset={-150}
                tabIndex="0"
              >
                <li className="small-text footer__nav-item">Галерея</li>
              </ScrollLink>
              <ScrollLink
                activeClass="active"
                smooth spy to="contacts"
                duration={300}
                offset={-150}
                tabIndex="0"
              >
                <li className="small-text footer__nav-item">Контакты</li>
              </ScrollLink>
            </ul>
          </div>
          <div className="footer__content sections">
            <h4 className="small-text">Проекты:</h4>
            <ul className="footer__nav">
              <Link tabIndex="0" to="/impulse">
                <li className="small-text footer__nav-item">Импульс</li>
              </Link>
              <Link tabIndex="0" to="/leagues">
                <li className="small-text footer__nav-item">Лиги</li>
              </Link>
            </ul>
          </div>
          <div className="footer__content contacts">
            <h4 className="small-text">Контакты:</h4>
            <div className="contacts-description">
              <p className="small-text">TG/WhatsApp:</p>
              <div className="contacts__phone">
                <img src={phone} alt="phone" className="phone__icon"/>
                <a className="contacts__text-link small-text" href="tel:+78005553535">8 (800) 555-35-35</a>
              </div>
            </div>
            <p className="small-text">
              <strong>E-mail:{" "}</strong>
              <a className="contacts__text-link small-text" href="mailto:impulse-camp@mail.ru">impulse-camp@mail.ru</a>
            </p>
          </div>
          <div className="footer__content socials">
            <h4 className="small-text">Мы в социальных сетях:</h4>
            {/* todo: проблемы безопасности с target _blank в старых браузерах */}
            <div className="social__links">
              <a className="social__icon" href="https://vk.com/impulse_msk" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="3.5rem" height="3.5rem" viewBox="0 0 24 24">
                  <path fill="currentColor"
                        d="M15.073 2H8.938C3.332 2 2 3.333 2 8.927v6.136C2 20.667 3.323 22 8.927 22h6.136C20.667 22 22 20.677 22 15.073V8.938C22 3.332 20.677 2 15.073 2m3.073 14.27h-1.459c-.552 0-.718-.447-1.708-1.437c-.864-.833-1.229-.937-1.448-.937c-.302 0-.385.083-.385.5v1.312c0 .355-.115.563-1.042.563a5.692 5.692 0 0 1-4.448-2.667a11.626 11.626 0 0 1-2.302-4.833c0-.219.083-.417.5-.417h1.459c.375 0 .51.167.656.552c.708 2.084 1.916 3.896 2.406 3.896c.188 0 .27-.083.27-.552v-2.146c-.062-.979-.582-1.062-.582-1.416a.36.36 0 0 1 .374-.334h2.292c.313 0 .417.156.417.531v2.896c0 .313.135.417.229.417c.188 0 .333-.104.677-.448a11.999 11.999 0 0 0 1.792-2.98a.628.628 0 0 1 .635-.416h1.459c.437 0 .53.219.437.531a18.205 18.205 0 0 1-1.958 3.365c-.157.24-.22.365 0 .646c.145.219.656.646 1 1.052a6.486 6.486 0 0 1 1.229 1.708c.125.406-.084.615-.5.615"/>
                </svg>
              </a>
              <a className="social__icon" href="https://t.me/impulse_msk" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="3.5rem" height="3.5rem" viewBox="0 0 32 32">
                  <path fill="currentColor"
                        d="M26.07 3.996a2.974 2.974 0 0 0-.933.223h-.004c-.285.113-1.64.683-3.7 1.547l-7.382 3.109c-5.297 2.23-10.504 4.426-10.504 4.426l.062-.024s-.359.118-.734.375a2.03 2.03 0 0 0-.586.567c-.184.27-.332.683-.277 1.11c.09.722.558 1.155.894 1.394c.34.242.664.355.664.355h.008l4.883 1.645c.219.703 1.488 4.875 1.793 5.836c.18.574.355.933.574 1.207c.106.14.23.257.379.351a1.119 1.119 0 0 0 .246.106l-.05-.012c.015.004.027.016.038.02c.04.011.067.015.118.023c.773.234 1.394-.246 1.394-.246l.035-.028l2.883-2.625l4.832 3.707l.11.047c1.007.442 2.027.196 2.566-.238c.543-.437.754-.996.754-.996l.035-.09l3.734-19.129c.106-.472.133-.914.016-1.343a1.807 1.807 0 0 0-.781-1.047a1.872 1.872 0 0 0-1.067-.27m-.101 2.05c-.004.063.008.056-.02.177v.011l-3.699 18.93c-.016.027-.043.086-.117.145c-.078.062-.14.101-.465-.028l-5.91-4.531l-3.57 3.254l.75-4.79l9.656-9c.398-.37.265-.448.265-.448c.028-.454-.601-.133-.601-.133l-12.176 7.543l-.004-.02l-5.836-1.965v-.004l-.015-.003a.27.27 0 0 0 .03-.012l.032-.016l.031-.011s5.211-2.196 10.508-4.426c2.652-1.117 5.324-2.242 7.379-3.11a807.312 807.312 0 0 1 3.66-1.53c.082-.032.043-.032.102-.032z"/>
                </svg>
              </a>
              {/* TODO: add link to inst */}
              <a className="social__icon" href="" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="3.5rem" height="3.5rem" viewBox="0 0 24 24">
                  <path fill="currentColor"
                        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;