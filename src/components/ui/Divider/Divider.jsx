import {Link as ScrollLink} from "react-scroll";
import './Divider.scss';

const Divider = ({link, spoiler, title}) => {
  return (
    <div className="divider">
        <ScrollLink
          activeClass="active"
          smooth spy to={link}
          duration={300}
          offset={-150}
          className="divider-spoiler"
        >
          <p className="spoiler">{spoiler}</p>
        </ScrollLink>
        <h3 className="divider-title">{title}</h3>
    </div>
  );
};

export default Divider;