import ButtonScroll from "../../ui/Buttons/ButtonScroll/ButtonScroll";
import './MainSection.scss';

const MainSection = () => {
    const gallery = Object.values(import.meta.glob('$images/main/*.{png,jpg,jpeg,svg,PNG,JPEG,SVG}', { eager: true, query: '?url', import: 'default'}))
    return (
        <div className="MainSection wrapper gaps" id="main">
            <div className="MainSection-Grid">
                <div className="MainSection-Info">
                    <h1>
                        <span>Импульс</span> - это семья
                    </h1>
                    <p>
                        Место, где мы играем, исследуем, обучаемся новому,
                        чтобы <strong>раскрывать потенциал</strong> и <strong>развиваться</strong>
                    </p>
                </div>
                <ButtonScroll scrollTo={"team"} title={"Узнать больше о нас"} />
                <div className="MainSection-Images">
                    {gallery.map((image, index) => (
                        <img key={index} src={image} alt={`pic-${index}`}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainSection;