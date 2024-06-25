import './ButtonSubmit.scss';

const ButtonSubmit = ({text}) => {
  return (
    <button className="button-submit" type="submit">
      {text}
    </button>
  );
};

export default ButtonSubmit;