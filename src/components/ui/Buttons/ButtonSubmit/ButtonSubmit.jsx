import {Audio, TailSpin} from 'react-loader-spinner'
import './ButtonSubmit.scss';

const ButtonSubmit = ({text, isLoading}) => {
  return (
    <button className="button-submit" type="submit">
      {
        isLoading ?
          <TailSpin
            visible={true}
            height="1.2rem"
            aspect="1"
            color="#724CF9"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          /> : text
      }
    </button>
  );
};

export default ButtonSubmit;