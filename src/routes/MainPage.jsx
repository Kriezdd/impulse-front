import MainSection from "../components/MainPage/Main/MainSection";
import Projects from "../components/MainPage/Projects/Projects";
import Team from "../components/MainPage/Team/Team";
import Contacts from "../components/MainPage/Contacts/Contacts.jsx";

const MainPage = () => {

  return (
    <div>
      <MainSection/>
      <Projects/>
      <Team/>
      <Contacts/>
    </div>
  );
};

export default MainPage;