import InfoCard from "./InfoCard";
import './Projects.scss';
import pic1 from "../../../images/projects/impulse.jpg";
import pic2 from "../../../images/projects/league.jpg";
import Divider from "../../ui/Divider/Divider.jsx";

const Projects = () => {
    const projectsArray = [
        {
            title: 'Импульс',
            address: '/impulse',
            subTitle: 'Пятидневный проект дневного пребывания для детей школьного возраста',
            list: ['активный отдых', 'развлечение', 'обучение'],
            picture: pic1,
        },
        {
            title: 'Лиги',
            address: '/leagues',
            subTitle: 'Еженедельные занятия, направленные на развитие личностных навыков SOFT-skills',
            list: ['комфортное пространство', 'единое сообщество', 'индивидуальный подход'],
            picture: pic2,
        }
    ]

    return (
        <div className="gaps">
            <Divider link={"projects"} spoiler={"где творятся чудеса"} title={"наши проекты"} />
            <div className="Projects wrapper" id="projects">
                <div className="Projects-Grid">
                    {projectsArray.map((project, id) => (
                      <InfoCard project={project} key={id}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;