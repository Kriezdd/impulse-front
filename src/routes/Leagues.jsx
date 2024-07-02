import ProjectAd from "../components/ProjectAd/ProjectAd.jsx";
import InfoLadder from "../components/InfoLadder/InfoLadder.jsx";
import nextProjectPic from "../images/projects/league.jpg";
import transpileImages from "../utils/TranspileImages.js";

const Leagues = () => {

  const projectAd = {
    title: 'Лиги',
    spoiler: '',
    description: '– это еженедельные занятия, направленные на развитие навыков soft skills - тех навыков которые помогут ребенку на любом этапе его жизни. На занятиях ребенок будет находиться в команде с другими детьми под началом одного или нескольких наших кураторов, основной задачей которого является достижение роста команды и ребенка лично.',
    date: 'каждые выходные',
    location: 'ABC "Montessori"',
    age: 'с 6-ти лет',
    price: '6 000р',
    image: nextProjectPic,
  }

  const images = transpileImages(Object.values(import.meta.glob('$images/impulse/ladder/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, query: '?url', import: 'default'})));
  const impulseInfo = [
    {
      title: 'Индивидуальный подход',
      description: 'Благодаря тому, что группы сформированы из небольшого кол-ва детей куратору проще видеть зоны роста каждого ребенка и сделать так, чтобы каждый из них мог извлечь максимум из занятий.',
      pic: images['img1']
    },
    {
      title: 'Опытные кураторы',
      description: 'У каждой Лиги есть свой куратор, который прошел обучение и хорошо ориентируется в навыках SOFT-skills и специально составленной программе к конкретному занятию',
      pic: images['img2']
    },
    {
      title: 'Геймификацияя занятий',
      description: 'Каждое занятие наполнено испытаниями и сюжетом и за каждое пройденное задание ребенок будет получать награду и узнавать больше про таинственный мир Лиг, что повышает вовлеченность в занятие и делает его не только полезным, но и очень интересным!',
      pic: images['img3']
    },
    {
      title: 'Сообщество',
      description: 'Помимо посещения обычных занятий, мы стремимся к тому, чтобы ребята принимали участие в других мероприятиях различной направленности, на которых они знакомятся и взаимодействуют с другими коллективам тем самым заводя новые знакомства, которые позже выходят за рамки Лиг',
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

export default Leagues;