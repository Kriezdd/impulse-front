import {Link} from 'react-router-dom';
import './ButtonLink.scss';

const ButtonLink = ({address, title}) => {
    return (
        <Link to={address}>
            <button className="ButtonLink">
                {title}
            </button>
        </Link>
    );
};

export default ButtonLink;