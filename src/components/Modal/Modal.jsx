import { useEffect, useRef } from "react";
import Cross from './elements/Cross.jsx'
import './Modal.scss';
import ProjectForm from "$components/Form/ProjectForm/ProjectForm.jsx";

const Modal = ({isModalActive, setModalActive, project}) => {
    const ref = useRef();

    function CloseModalHandler() {
        setModalActive(false)
    }

    useEffect(() => {
        if (isModalActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalActive])

    return (
        <div ref={ref} className={`modal-container ${isModalActive ? 'modal-active' : ''}`}>
            <div onClick={CloseModalHandler} className='cross'>
                <Cross />
            </div>
            <div className='modal-content gaps'>
                <h2 className='modal-content__text'>Заявка на участие в проекте</h2>
                <p className='modal-content__text'>Заполните и отправьте форму, а мы свяжемся с вами, чтобы подтвердить завявку или ответить на все ваши вопросы</p>
                <ProjectForm project={project} setModalActive={setModalActive} />
            </div>
        </div>
    )
}

export default Modal;