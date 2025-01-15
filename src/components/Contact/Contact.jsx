import { IoIosContact } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import s from "./Contact.module.css";

const Contact = ({ id, number, name, onDelete }) => {
  return (
    <li className={s.contactItem}>
      <div>
        <div className={s.contactContext}>
          <IoIosContact />
          <span>{name}</span>
        </div>
        <div className={s.contactContext}>
          <MdPhoneInTalk />
          <a href={`tel: ` + number}>{number}</a>
        </div>
      </div>
      <button
        onClick={() => onDelete(id)}
        type="button"
        aria-label="delete button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
