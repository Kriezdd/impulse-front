import ButtonLink from "../../ui/Buttons/ButtonLink/ButtonLink";
import './InfoCard.scss';

const InfoCard = ({project}) => {

    return (
        <div className="info-card">
            <div className="info-card__background">
                <div style={{
                    backgroundImage: `url(${project.picture})`
                }}
                     className="info-card__background-image"/>
            </div>
            <div className="info-card__text">
                <h2 className="text-title text-light">{project.title}</h2>
                <p className="text-light">{project.subTitle}</p>
                <div className="text__list__container">
                    <p className="text-light">Что вас ждёт?</p>
                    <ul className="text__list text-light">{
                        project.list.map((d) => <li key={d}>{d}</li>)
                    }</ul>
                </div>
                <ButtonLink
                    address={project.address}
                    title={"Узнать больше о проекте"}>
                </ButtonLink>
            </div>
        </div>
    );
};

export default InfoCard;