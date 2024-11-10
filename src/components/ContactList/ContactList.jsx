
import ContactListItem from "../ContactListItem/ContactListItem";
import styles from './ContactList.module.css'

export default function ContactList({ list, setList }) {
  const deleteById = (id) => {
    setList((prevList) => {
      const updatedList = prevList.filter((item) => item.id !== id);
      localStorage.setItem("listdata", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  return (
    <div className={styles.contactList}>
      {list.map((item) => (
        <ContactListItem
          deleteById={() => deleteById(item.id)}
          item={item}
          key={item.id}
        />
      ))}
    </div>
  );
}
