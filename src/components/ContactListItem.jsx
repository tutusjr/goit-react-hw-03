
export default function ContactListItem({item, deleteById}) {

  return (
    <div className="items-container">
    <div className="desc">
        <p>{item.name}</p>
        <p>{item.number}</p>
    </div>
    <div>
        <button onClick={deleteById} className="deleteButton">Delete</button>
    </div>
    </div>
  )
}
