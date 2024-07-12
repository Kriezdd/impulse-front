import Divider from "../../ui/Divider/Divider.jsx";
import MessageForm from "../../Form/MessageForm/MessageForm.jsx";
import './Contacts.scss';
import ContactsCard from "./ContactsCard/ContactsCard.jsx";

const Contacts = () => {
  return (
    <div className="contacts-section gaps">
      <Divider link="contacts" title="наши контакты" spoiler="как с нами связаться"/>
      <div className="wrapper" id="contacts">
        <div className="container">
          <h3><strong>Остались вопросы? Напишите нам!</strong></h3>
          <p>Оставьте своё сообщение, отправьте вопрос или отзыв через форму, мы обязательно свяжемся с вами в ближайшее
            время</p>
          <MessageForm />
        </div>
        <div className="container contacts__additional">
          <h3><strong>Другие способы связаться с нами:</strong></h3>
          <ContactsCard />
        </div>
      </div>
    </div>
  );
};

export default Contacts;