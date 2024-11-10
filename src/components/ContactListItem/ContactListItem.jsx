
import styles from './ContactListItem.module.css'
export default function ContactListItem({item, deleteById}) {

  return (
    <div className={styles.itemContainer}>
    <div className={styles.desc}>
        <p>{item.name}</p>
        <p>{item.number}</p>
    </div>
    <div>
        <button onClick={deleteById} className="deleteButton">Delete</button>
    </div>
    </div>
  )
}
