import {useState} from 'react';
import { isMobile } from "react-device-detect";
import MemberModal from "./MemberModal/MemberModal";
import './MemberCard.scss';
import TouchIcon from "$components/MainPage/Team/elements/TouchIcon.jsx";

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
      onMouseEnter={isMobile ? null : handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='member-card'
    >
      <div className="member-card__accent">

        <TouchIcon/>
      </div>
      <img src={member.pic} className="member-card__background" alt="member"/>
      <MemberModal member={member} isDetailed={isDetailed}/>
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