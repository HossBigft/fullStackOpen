import { useState } from "react";

const App = () => {
  const [records, setRecords] = useState([{ name: "Arto Hellas", number: "" }]);
  const [name, setNewName] = useState("");
  const [number, setNewNumber] = useState("");
  const [filterString, setFilterString] = useState("");
  const [filteredRecords, setFilteredRecords] = useState("");
  const addRecord = (event) => {
    event.preventDefault();
    const newRecord = {
      name: name,
      number: number,
    };
    console.log(records);
    if (records.some((record) => record.name === newRecord.name))
      window.alert(`${newRecord.name} is already added to phonebook`);
    else setRecords(records.concat(newRecord));
    console.log(records);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleFilterStringChange = (event) => {
    const newFilterString = event.target.value;
    setFilterString(newFilterString);
    setFilteredRecords(
      records.filter(record => record.name.toLowerCase().includes(newFilterString.toLowerCase()))
    );
  };

  if (filterString === "")
    return (
      <div>
        <h2>Phonebook</h2>
        <div>
          name:{" "}
          <input value={filterString} onChange={handleFilterStringChange} />
        </div>
        <h2>add a new</h2>
        <form onSubmit={addRecord}>
          <div>
            name: <input value={name} onChange={handleNameChange} />
          </div>
          <div>
            number: <input value={number} onChange={handleNumberChange} />
          </div>
          <button type="submit">add</button>
        </form>
        <h2>Numbers</h2>
        {records.map((entry) => (
          <div key={entry.name}>
            {entry.name} {entry.number}
          </div>
        ))}
      </div>
    );
  else
    return (
      <div>
        <h2>Phonebook</h2>
        <div>
          name:{" "}
          <input value={filterString} onChange={handleFilterStringChange} />
        </div>
        <h2>add a new</h2>
        <form onSubmit={addRecord}>
          <div>
            name: <input value={name} onChange={handleNameChange} />
          </div>
          <div>
            number: <input value={number} onChange={handleNumberChange} />
          </div>
          <button type="submit">add</button>
        </form>
        <h2>Numbers</h2>
        {filteredRecords.map((entry) => (
          <div key={entry.name}>
            {entry.name} {entry.number}
          </div>
        ))}
      </div>
    );
};

export default App;
