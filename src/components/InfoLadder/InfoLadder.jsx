import InfoParagraph from "./InfoParagraph/InfoParagraph.jsx";
import './InfoLadder.scss';
import Divider from "../ui/Divider/Divider.jsx";

const InfoLadder = ({info}) => {
  const projectInfo = [...info];

  return (
    <div className="gaps">
      <Divider link="info-ladder" spoiler="узнайте подробности" title="что вас ждёт"/>
      <div id="info-ladder" className="info-ladder wrapper">
        {
          projectInfo.map((par, index) => (
            <InfoParagraph par={par} key={index}/>
          ))
        }
      </div>
    </div>
  );
};

export default InfoLadder;