import { useEffect, useRef } from "react";
import Cross from './elements/Cross.jsx'
import './Modal.scss';

const Modal = ({isModalActive, setModalActive}) => {
    const ref = useRef();

    function CloseModalHandler() {
        setModalActive(false)
    }

    useEffect(() => {
        if (isModalActive) {
            ref.current.classList.add('modal-active');

            document.body.style.overflow = 'hidden';
        } else {
            ref.current.classList.remove('modal-active');

            document.body.style.overflow = 'auto';
        }
    }, [isModalActive])

    return (
        <div ref={ref} className='modal-container'>
            <div onClick={CloseModalHandler} className='cross'>
                <Cross />
            </div>
        </div>
    )
}

export default Modal;