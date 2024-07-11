import MainSection from "../components/MainPage/MainSection/MainSection";
import Projects from "../components/MainPage/Projects/Projects";
import Team from "../components/MainPage/Team/Team";
import Contacts from "../components/MainPage/Contacts/Contacts.jsx";
import Gallery from "$components/MainPage/Gallery/Gallery.jsx";

const MainPage = () => {

  return (
    <div>
      <MainSection/>
      <Projects/>
      <Team/>
      <Contacts/>
      <Gallery/>
    </div>
  );
};

export default MainPage;