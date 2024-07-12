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
            className='member-card'
        >
            <div
                style={{
                    backgroundImage: `url(${member.pic})`
                }}
                className={`member-card__background`}
            />

            <MemberModal member={member} isDetailed={isDetailed} />

            <div className={`info__container ${isDetailed ? `` : `active`}`}>
                <div className="member__main-info">
                    <p>{member.name}</p>
                    <p className="member__pos small-text">{member.position}</p>
                </div>
            </div>

        </div>
    );
};

export default MemberCard;