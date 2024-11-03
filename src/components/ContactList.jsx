import { useState } from "react";
import ContactListItem from "./ContactListItem";

export default function ContactList({ list, setList }) {
  const deleteById = (id) => {
    setList((prevList) => {
      const updatedList = prevList.filter((item) => item.id !== id);
      localStorage.setItem("listdata", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  return (
    <div className="contactList">
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
