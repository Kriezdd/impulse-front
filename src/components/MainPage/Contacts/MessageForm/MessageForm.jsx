import ButtonSubmit from "../../../ui/Buttons/ButtonSubmit/ButtonSubmit.jsx";
import {useForm} from "react-hook-form";
import './MessageForm.scss';

const MessageForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
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