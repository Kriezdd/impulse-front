import ProjectAd from "../components/ProjectAd/ProjectAd.jsx";
import InfoLadder from "../components/InfoLadder/InfoLadder";
import transpileImages from "../utils/TranspileImages.js";
import nextProjectPic from "../images/impulse/next_project.png";

const Impulse = () => {

    const projectAd = {
        title: 'Кунг-Фу Панда',
        spoiler: 'описание игрового мира',
        description: 'Спасение Долины Мира и всех ее обитателей от непобедимого и безжалостного мастера Тай ' +
          'Лунга должно лечь на плечи Воина Дракона, Избранного среди лучших из лучших, коим становится…',
        date: '22-26 ноября',
        location: 'ABC "Montessori"',
        age: 'с 6-ти лет',
        price: '10 000р',
        image: nextProjectPic,
    }

    const images = transpileImages(Object.values(import.meta.glob('../../../images/impulse/ladder/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, query: '?url', import: 'default'})));
    const impulseInfo = [
        {
            title: 'Интересный игровой мир',
            description: 'Каждый следующий проект не похож на предыдущий, наша команда бережно относится к выбору и ' +
                'проработке игрового сюжета.',
            pic: images['img1']
        },
        {
            title: 'Обучение SOFT-skills',
            description: 'В первую очередь мы стремимся раскрывать сильные стороны, и ближе знакомить ребят с мягкими' +
                ' или гибкими навыками, про которые не говорят в школе.',
            pic: images['img2']
        },
        {
            title: 'Активный отдых',
            description: 'В течение всего проекта у ребят будет много различных активностей, которые помогают ' +
              'им проявить свои таланты, научиться чему-то новому, выплеснуть энергию и получить заряд эмоций.',
            pic: images['img3']
        },
        {
            title: 'Опытные кураторы',
            description: 'Отрядный (или куратор) постоянно находится рядом, помогает детям разрешать сложные ' +
              'ситуации, направляет их энергию в правильную сторону, даёт возможность каждому ребёнку быть услышанным.',
            pic: images['img4']
        },
    ]
    return (
        <div>
            <ProjectAd info={projectAd}/>
            <InfoLadder info={impulseInfo}/>
        </div>
    );
};

export default Impulse;