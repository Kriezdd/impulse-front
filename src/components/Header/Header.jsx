import {Link, useLocation} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll'
import logo from '../../images/logo.png';
import './Header.scss';

const Header = () => {
    const location = useLocation();
    const {pathname} = location;

    return (
        <header className="Header">
            <nav className="wrapper">
                {
                    pathname === "/" ?
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
                            <ul>
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
                                        smooth spy to="galery"
                                        duration={300}
                                        offset={-150}
                                    >
                                        Галерея
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
                            </ul>
                        </>
                        :
                        <>
                            <Link to={"/"} className="Header-LogoContainer logo">
                                <img src={logo} alt="logopic" className="logo-img"/>
                                <h3 className="logo-title">Импульс</h3>
                            </Link>
                            <ul>
                                <Link to={"/"}>Вернуться на главную</Link>
                            </ul>
                        </>
                }
                {}

            </nav>
        </header>
    )
        ;
};

export default Header;