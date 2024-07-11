import {useForm} from "react-hook-form";
import ErrorIcon from "$components/Form/elements/ErrorIcon.jsx";
import ButtonSubmit from "$components/ui/Buttons/ButtonSubmit/ButtonSubmit.jsx";
import * as emailjs from "@emailjs/browser";
import './../FormStyling.scss';
import './ProjectForm.scss';

const emailJS = {
  serviceID: "service_ozsz83l",
  templateID: "template_lzgi94g",
  publicID: "o9lstfwhy-ua6dvbl",
}

const ProjectForm = ({project}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = (data) => {
    const templateParams = {
      project,
      from_name: data.name,
      phone: data.phone,
      child_name: data.child_name,
      child_birthday: data.child_birthday,
      message: data.message,
    };
    // todo: delete lock when prod
    alert("Ты супер!");
    // emailjs.send(emailJS.serviceID, emailJS.templateID, templateParams, emailJS.publicID).then(
    //   (response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //   },
    //   (error) => {
    //     console.log('FAILED...', error);
    //   },
    // );
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
        <p className="small-text aggreement">
          *Отправляя форму, вы даёте согласие на обработку персональных данных и принимаете условия соглашения
        </p>
      <ButtonSubmit text="Отправить форму"/>
    </form>
  )
    ;
};

export default ProjectForm;