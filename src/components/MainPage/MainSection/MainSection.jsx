import ButtonScroll from "../../ui/Buttons/ButtonScroll/ButtonScroll";
import rectangle from '$images/main/rectangle.png';
import './MainSection.scss';

const MainSection = () => {
  return (
    <div className="main-section wrapper gaps" id="main">
      <div className="main-section__container">
        <h1 className="info__text title">
          <span className="title-accent">Импульс</span> - это семья
        </h1>
        <img src={rectangle} className="main-section__rectangle" alt="main-rectangle"/>
        <p className="info__text paragraph">
          Место, где мы играем, исследуем, обучаемся новому, <br/>
          чтобы <strong>раскрывать потенциал</strong> и <strong>развиваться</strong>
        </p>
        <ButtonScroll scrollTo={"team"} title={"Узнать больше о нас"}/>
      </div>
    </div>
  );
};

export default MainSection;