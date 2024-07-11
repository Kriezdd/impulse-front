import ButtonSubmit from "../../ui/Buttons/ButtonSubmit/ButtonSubmit.jsx";
import {useForm} from "react-hook-form";
import * as emailjs from "@emailjs/browser";
import ErrorIcon from "$components/Form/elements/ErrorIcon.jsx";
import './../FormStyling.scss';
import './MessageForm.scss';

const emailJS = {
  serviceID: "service_ozsz83l",
  templateID: "template_6ds5y48",
  publicID: "o9lstfwhy-ua6dvbl",
}

const MessageForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()
  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.name,
      phone: data.phone,
      message: data.message,
    };
    // todo: delete lock when prod
    alert("Ты супер!");
    // emailjs.send(emailJS.serviceID, emailJS.templateID, templateParams).then(
    //   (response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //   },
    //   (error) => {
    //     console.log('FAILED...', error);
    //   },
    // );
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
      <p className="small-text light-bg aggreement">
        *Отправляя форму, вы даёте согласие на обработку персональных данных и принимаете условия соглашения
      </p>
      <ButtonSubmit text="Отправить форму"/>
    </form>
  );
};

export default MessageForm;