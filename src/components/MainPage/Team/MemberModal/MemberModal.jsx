import './MemberModal.scss';

const MemberModal = ({member, isDetailed}) => {
    return (
        <div className={`member-modal ${isDetailed ? `active` : ``}`}>
            <div className="additional-bg">
                <div className="info-container">
                    <div className="member-info">
                        <div className="member__main-info">
                            <strong>{member.name}</strong>
                            <p className="member__pos">{member.position}</p>
                        </div>
                        <div className="DetailedInfo-ExperienceFact">
                            <p className="small-text">Опыт работы: {member.moreInfo.experience}</p>
                            <p className="small-text">{member.moreInfo.fact}</p>
                        </div>
                        <div className="detailed-info__quote">
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