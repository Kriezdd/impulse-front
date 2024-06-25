import {useState} from 'react';
import MemberModal from "./MemberModal/MemberModal";
import './MemberCard.scss';

const MemberCard = ({member}) => {
    const [isDetailed, setIsDetailed] = useState(false);

    const handleMouseEnter = () => {
        setIsDetailed(prevState => !prevState)
    };

    const handleMouseLeave = () => {
        setIsDetailed(false)
    };

    function handleClick() {
        setIsDetailed(prevState => !prevState)
    }

    return (
        <div
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='MemberCard'
        >
            <div
                style={{
                    backgroundImage: `url(${member.pic})`
                }}
                className={`MemberBackground`}
            />

            <MemberModal member={member} isDetailed={isDetailed} />

            <div className={`InfoContainer ${isDetailed ? `` : `active`}`}>
                <div className="Member-MainInfo">
                    <p>{member.name}</p>
                    <p className="memberPos small-text">{member.position}</p>
                </div>
            </div>

        </div>
    );
};

export default MemberCard;