import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import listData from './list.json'


function App() {

  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem('listdata');
    return savedList ? JSON.parse(savedList) : listData;
  });
  const [filteredList, setFilteredList] = useState(list);

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  const handleSearch = (value) => {
    const filtered = list.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(filtered);
  };

  return (
    <>
      <ContactForm list={list} setList={setList} />
      <SearchBox onSearch={handleSearch} />
      <ContactList list={filteredList} setList={setList} />
    </>
  );
}

export default App;
