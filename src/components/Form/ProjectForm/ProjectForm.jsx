import {useState} from "react";
import {useForm} from "react-hook-form";
import ErrorIcon from "$components/Form/elements/ErrorIcon.jsx";
import ButtonSubmit from "$components/ui/Buttons/ButtonSubmit/ButtonSubmit.jsx";
import './../FormStyling.scss';
import './ProjectForm.scss';
import {sendMessage} from "../../../api/telegram.js";

const ProjectForm = ({project, setModalActive, notify}) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm()

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const message = `Новая заявка в проект ${project}! %0A Имя: ${data.name} %0A Телефон: ${data.phone} 
      %0A Имя ребенка: ${data.child_name} %0A Дата рождения ребёнка: ${data.child_birthday} %0A Сообщение: ${data.message}`;
      await sendMessage(message);
    } catch (e) {
      console.log(e);
    } finally {
      reset();
      setIsLoading(false);
      setModalActive(false);
      notify();
    }
  }

  return (
    <form className="project-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="group-info">
        <div className="form__input-container">
          <input
            className={`form__input ${errors.name ? 'input-error' : ''}`}
            placeholder="Представьтесь, пожалуйста..."
            {...register("name", {required: true})}
          />
          {
            errors.name?.type === 'required' &&
            <p className="small-text error">
              <ErrorIcon/>
              Поле обязательно к заполнению</p>
          }
        </div>
        <div className="form__input-container">
          <input
            className={`form__input ${errors.phone ? 'input-error' : ''}`}
            placeholder="Ваш номер телефона..."
            {...register("phone", {required: true})}
          />
          {
            errors.name?.type === 'required' &&
            <p className="small-text error">
              <ErrorIcon/>
              Поле обязательно к заполнению</p>
          }
        </div>
      </div>
      <div className="group-info">
        <input
          className={`form__input ${errors.child_name ? 'input-error' : ''}`}
          placeholder="ФИО ребёнка..."
          {...register("child_name")}
        />

        <div className="form__input-container">
          <input
            className={`form__input ${errors.child_birthday ? 'input-error' : ''}`}
            placeholder="Дата рождения ребёнка..."
            {...register("child_birthday")}
          />
        </div>
      </div>
      <div className="form__input-container">
      <textarea
        className={`form__input message ${errors.message ? 'input-error' : ''}`}
        placeholder="Напишите ваше сообщение..."
        {...register("message")}
      />
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
            <p className="light-text">Я согласен с <a href="#">политикой обработки персональных данных</a></p>
          </label>
        </div>
        {
          errors.checkbox?.type === 'required' &&
          <p className="small-text error">
            <ErrorIcon/>
            Подтвердите согласие
          </p>
        }
      </div>
      <ButtonSubmit text="Отправить форму" isLoading={isLoading}/>
    </form>
  )
    ;
};

export default ProjectForm;