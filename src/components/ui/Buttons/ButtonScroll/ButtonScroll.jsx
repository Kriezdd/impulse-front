import { Link as ScrollLink } from 'react-scroll';
import './ButtonScroll.scss';

const ButtonScroll = ({ scrollTo, title }) => {
    return (
        <ScrollLink
            className="ButtonScroll"
            activeClass="active"
            smooth spy to={scrollTo}
            duration={300}
            offset={-150}
        >
            {title}
        </ScrollLink>
    );
};

export default ButtonScroll;