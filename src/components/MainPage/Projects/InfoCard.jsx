import ButtonLink from "../../ui/Buttons/ButtonLink/ButtonLink";
import './InfoCard.scss';

const InfoCard = ({project}) => {

    return (
        <div className="InfoCard">
            <div className="Background">
                <div style={{
                    backgroundImage: `url(${project.picture})`
                }}
                     className="Background-Image"/>
            </div>
            <div className="InfoCard-TextArea">
                <h2 className="TextArea-Title">{project['title']}</h2>
                <p className="TextArea-Description">{project['subTitle']}</p>
                <div className="TextArea-QA">
                    <p className="TextArea-Question">Что вас ждёт?</p>
                    <ul className="TextArea-List">{
                        project['list'].map((d) => <li key={d}>{d}</li>)
                    }</ul>
                </div>
                <ButtonLink
                    address={project['address']}
                    title={"Узнать больше о проекте"}>
                </ButtonLink>
            </div>
        </div>
    );
};

export default InfoCard;