import './ButtonForm.scss';

const ButtonForm = ({title, setModalActive}) => {
  function clickHandler() {
    setModalActive(true);
  }

  return (
    <button onClick={clickHandler} className="button-form">{title}</button>
  );
};

export default ButtonForm;