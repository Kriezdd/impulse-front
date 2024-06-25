import MemberCard from "./MemberCard";
import transpileImages from "../../../utils/TranspileImages.js";
import Divider from "../../ui/Divider/Divider.jsx";
import './Team.scss';

const Team = () => {

    const gallery = transpileImages(Object.values(import.meta.glob('../../../images/team/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, query: '?url', import: 'default'})));


    const members = [
        {
            id: 1,
            name: 'Обертяева Карина',
            position: 'Руководитель организации',
            pic: gallery['karina'],
            moreInfo: {
                experience: 'с 2016 года',
                fact: 'Организатор социального проекта «Дети-Детям» ' +
                    'по проведению развлекательных и тренинговых программ в интернатах.',
                quote: '«Всю свою жизнь я ездила в лагеря в роли ребенка и когда выросла поняла, ' +
                    'что мне не хватает той атмосферы, ярких эмоций, которые когда-то давали мне. ' +
                    'В своей работе я хочу дарить детям ощущение сказки, в то же время заряжаясь их ' +
                    'бесконечной энергией и позитивом»',
            },
        },
        {
            id: 2,
            name: 'Благушин Никита',
            position: 'Главный игровой методист',
            pic: gallery['nikita'],
            moreInfo: {
                experience: 'с 2017 года',
                fact: 'Участвовал во многих волонтёрских проектах. ' +
                    'С 2020-го года занимается разработкой игровых и сюжетных механизмов.',
                quote: '«Я работаю с детьми, потому что хочу удивлять и расширять их кругозор ' +
                    'с помощью наших игр и проектов. Дарить им новые эмоции, давать тот заряд энергии, ' +
                    'который когда-то в детстве отдали мне»',
            },
        },
        {
            id: 3,
            name: 'Болтнева Алиса',
            position: 'Главный методист обучения',
            pic: gallery['alice'],
            moreInfo: {
                experience: 'с 2017 года',
                fact: 'Участвовал во многих волонтёрских проектах.',
                quote: '«Я работаю с детьми, потому что в детстве в лагерях я очень многому научилась. ' +
                    'Хочу помогать ребятам учиться тем навыкам, которые им пригодятся в будущем. ' +
                    'Стараюсь сделать так, чтобы для них это было не только полезно, но и весело»',
            },
        },
        {
            id: 4,
            name: 'Хвалынский Фёдор',
            position: 'Методист обучения',
            pic: gallery['fedor'],
            moreInfo: {
                experience: 'с 2017 года',
                fact: 'Ведущий детских развивающих коллективов по программе SOFT-skills ' +
                    'с 2020 года и куратор этих коллективов с 2022',
                quote: '«Работаю с детьми потому что хочется подарить детям сказку и показать, ' +
                    'что можно жить и делать по другому, показать что проявлять инициативу не страшно, ' +
                    'а брать ответственность интересно»',
            },
        },
        {
            id: 5,
            name: 'Попова Ксения',
            position: 'Организатор, творец',
            pic: gallery['ksenia'],
            moreInfo: {
                experience: 'с 2016 года',
                fact: 'Была участником и организатором волонтерского проекта по проведению праздников ' +
                    'в детских психиатрических больницах и интернатах. ' +
                    'Является волонтером фонда помощи онкобольным детям «ДоброСвет»',
                quote: '«Я всегда поражалась детскому мышлению и креативу. Работа с детьми заряжает ' +
                    'меня на многие месяцы вперед и я ценю, что имею возможность дарить им опыт, ' +
                    'знания и веселье»',
            },
        },
        {
            id: 6,
            name: 'Переславцев Данила',
            position: 'Игровой методист',
            pic: gallery['danila'],
            moreInfo: {
                experience: 'с 2016 года',
                fact: 'Отучился в театральной школе и принимал участие в съёмках Ералаша',
                quote: '«Я 6 лет принимал участие в детских лагерях в качестве ребёнка и всегда хотел ' +
                    'быть в составе тех, кто создаёт такое невероятное пространство для детей»',
            },
        },
        {
            id: 7,
            name: 'Пищулина Алина',
            position: 'Организатор пространства',
            pic: gallery['alina'],
            moreInfo: {
                experience: 'с 2016 года',
                fact: 'Преподает иностранные языки детям. Любит фотографировать',
                quote: '«Мне важно передать знания и опыт детям, зажечь огонек в их глазах и быть тем наставником, ' +
                    'которым когда-то были для меня»',
            },
        },
        {
            id: 8,
            name: 'Козлова Лиза',
            position: 'Руководитель Лиг',
            pic: gallery['danila'],
            moreInfo: {
                experience: 'с 2016 года',
                fact: 'Преподает иностранные языки детям. Любит фотографировать',
                quote: '«Мне важно передать знания и опыт детям, зажечь огонек в их глазах и быть тем наставником, ' +
                    'которым когда-то были для меня»',
            },
        },
    ]

    return (
        <div className="Team gaps" >
            <Divider link={"team"} spoiler={"кто творит для вас"} title={'наша команда'}/>
            <div className="Team-Grid wrapper" id="team">
                {members.map((member, index) => (<MemberCard key={index} member={member}/>))}
            </div>
        </div>
    );
};

export default Team;