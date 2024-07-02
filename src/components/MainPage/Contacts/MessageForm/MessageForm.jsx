import ButtonSubmit from "../../../ui/Buttons/ButtonSubmit/ButtonSubmit.jsx";
import {useForm} from "react-hook-form";
import './MessageForm.scss';
import * as emailjs from "@emailjs/browser";

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
      to_name: 'Impulse Team',
      phone: data.phone,
      message:data.message,
    };

    emailjs.send(emailJS.serviceID, emailJS.templateID, templateParams, emailJS.publicID).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__personal-info">
        <input
          className="form__input name"
          placeholder="Представьтесь, пожалуйста..."
          {...register("name", {required: true})} />
        <input
          className="form__input phone"
          placeholder="Оставьте номер телефона..."
          {...register("phone", {required: true})}/>
      </div>
      <p className="error small-text">{errors.name}</p>
      <textarea
        className="form__input message"
        placeholder="Напишите ваше сообщение..."
        {...register("message")}/>
      <p className="small-text light-bg aggreement">
        *Отправляя форму, вы даёте согласие на обработку персональных данных и принимаете условия соглашения
      </p>
      <ButtonSubmit text="Отправить форму"/>
    </form>
  );
};

export default MessageForm;