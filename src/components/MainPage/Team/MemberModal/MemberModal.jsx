import './MemberModal.scss';

const MemberModal = ({member, isDetailed}) => {
    return (
        <div className={`MemberModal ${isDetailed ? `active` : ``}`}>
            <div className="additional-bg">
                <div className="info-container">
                    <div className="MemberInfo">
                        <div className="Member-MainInfo">
                            <strong>{member.name}</strong>
                            <p className="memberPos">{member.position}</p>
                        </div>
                        <div className="DetailedInfo-ExperienceFact">
                            <p className="small-text">Опыт работы: {member.moreInfo.experience}</p>
                            <p className="small-text">{member.moreInfo.fact}</p>
                        </div>
                        <div className="DetailedInfo-Quote">
                            <p className="small-text">{member.moreInfo.quote}</p>
                        </div>
                    </div>
                </div>
                <div className="grad"></div>
            </div>
        </div>
    );
};

export default MemberModal;