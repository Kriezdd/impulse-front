import {useState} from "react";
import {ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Divider from "../ui/Divider/Divider.jsx";
import ButtonForm from "../ui/Buttons/ButtonForm/ButtonForm.jsx";
import Modal from '$components/Modal/Modal.jsx'
import './ProjectAd.scss';

const ProjectAd = ({info}) => {
  const [isModalActive, setModalActive] = useState(false);
  const notify = () => {
    toast.success("Форма успешно отправлена!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }
  const projectAd = info;

  return (
    <div className="project-ad__container">
      <Divider link={"project-ad"} spoiler={"успей подать заявку"} title={"следующий проект"}/>
      <div id="project-ad" className="project-ad wrapper">
        <img className="project-ad__image" src={projectAd.image} alt="nextproject.png"/>
        <div className="project-ad__info">
          <h1 className="info-title">{projectAd.title}</h1>
          {
            projectAd.spoiler &&
            <div className="info-point">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor">
                  <path
                    d="M11.7 1.173a.6.6 0 0 1 .6 0l8.926 5.154a.6.6 0 0 1 .3.52v10.307a.6.6 0 0 1-.3.52L12.3 22.826a.6.6 0 0 1-.6 0l-8.926-5.154a.6.6 0 0 1-.3-.52V6.847a.6.6 0 0 1 .3-.52z"/>
                  <path d="M17 15H7l5-8z"/>
                  <path
                    d="M2.5 6.5L12 7m-9.5-.5L7 15m14.5-8.5L17 15m4.5-8.5L12 7V1m9.5 16.5L17 15M2.5 17.5L7 15m0 0l5 8l5-8"/>
                </g>
              </svg>
              <p><strong>{projectAd.spoiler}</strong></p>
            </div>
          }
          <p className="info-description">{projectAd.description}</p>
          <div className="info-points__container">
            <div className="info-point">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem"
                   viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z"/>
              </svg>
              <p>{projectAd.date}</p>
            </div>
            <div className="info-point">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26 26 0 0 0 12 20.758q.262-.201.615-.49a26 26 0 0 0 2.647-2.504C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053l-.27-.197a28 28 0 0 1-3.797-3.44C5.218 16.875 3 13.636 3 9.999a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28 28 0 0 1-3.796 3.44a17 17 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"/>
              </svg>
              <p>{projectAd.location}</p>
            </div>
            <div className="info-point">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M3.5 8a5.5 5.5 0 1 1 8.596 4.547a9.005 9.005 0 0 1 5.9 8.18a.751.751 0 0 1-1.5.045a7.5 7.5 0 0 0-14.993 0a.75.75 0 0 1-1.499-.044a9.005 9.005 0 0 1 5.9-8.181A5.5 5.5 0 0 1 3.5 8M9 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8m8.29 4q-.221 0-.434.03a.75.75 0 1 1-.212-1.484a4.53 4.53 0 0 1 3.38 8.097a6.69 6.69 0 0 1 3.956 6.107a.75.75 0 0 1-1.5 0a5.19 5.19 0 0 0-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0 0 17.29 8"/>
              </svg>
              <p>{projectAd.age}</p>
            </div>
          </div>
          <div className="info-price">
            <ButtonForm title={"Успей оставить заявку"} setModalActive={setModalActive} />
            <p>Стоимость: <strong>{projectAd.price}</strong></p>
          </div>
        </div>
      </div>
      <ToastContainer/>
      <Modal isModalActive={isModalActive} setModalActive={setModalActive} project={projectAd.project} notify={notify} />
    </div>
  );
};

export default ProjectAd;