import {useState} from "react";
import {useForm} from "react-hook-form";
import {ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {sendMessage} from "../../../api/telegram.js";
import ErrorIcon from "$components/Form/elements/ErrorIcon.jsx";
import ButtonSubmit from "../../ui/Buttons/ButtonSubmit/ButtonSubmit.jsx";
import './../FormStyling.scss';
import './MessageForm.scss';

const MessageForm = () => {
  const [isLoading, setIsLoading] = useState(false);
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

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm()
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const message = `Новое сообщение с сайта! %0A Имя: ${data.name} %0A Телефон: ${data.phone} %0A Сообщение: ${data.message}`;
      await sendMessage(message);
    } catch (e) {
      console.log(e);
    } finally {
      reset();
      setIsLoading(false);
      notify();
    }
  }

  return (
    <form className="message-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__personal-info">
        <div className="form__input-container name">
          <input
            className={`form__input ${errors.name ? 'input-error' : ''}`}
            placeholder="Представьтесь, пожалуйста..."
            {...register("name", {required: true})} />
          {
            errors.name?.type === 'required' &&
            <p className="small-text error">
              <ErrorIcon/>
              Поле обязательно к заполнению
            </p>
          }
        </div>
        <div className="form__input-container phone">
          <input
            className={`form__input ${errors.phone ? 'input-error' : ''}`}
            placeholder="Оставьте номер телефона..."
            {...register("phone", {required: true})}/>
          {
            errors.phone &&
            <p className="small-text error">
              <ErrorIcon/>
              Поле обязательно к заполнению
            </p>
          }
        </div>
      </div>
      <div className="form__input-container">
      <textarea
        className={`form__input message ${errors.message ? 'input-error' : ''}`}
        placeholder="Напишите ваше сообщение..."
        {...register("message", {required: true})}/>
        {
          errors.message?.type === 'required' &&
          <p className=" small-text error">
            <ErrorIcon/>
            Поле обязательно к заполнению
          </p>
        }
      </div>
      <div className="form__input-container checkbox">
        <div className="checkbox__wrapper">
          <input
            type="checkbox"
            id="checkbox"
            className="checkbox__input"
            {...register("checkbox", {required: true})}
          />
          <label htmlFor="checkbox">
            <p>Я согласен на обработку персональных данных</p>
          </label>
        </div>
        {
          errors.checkbox?.type === 'required' &&
          <p className=" small-text error">
            <ErrorIcon/>
            Подтвердите согласие
          </p>
        }
      </div>
      <ButtonSubmit text="Отправить форму" isLoading={isLoading}/>
      <ToastContainer/>
    </form>
  );
};

export default MessageForm;