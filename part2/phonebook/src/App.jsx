import { useState } from "react";

const Phonebook = ({ records , filterString}) => {
  const recordsToPrint =
    filterString.length === 0
      ? records
      : records.filter((record) =>
          record.name.toLowerCase().includes(filterString.toLowerCase())
        );
  return (
    <div>
      <h2>Numbers</h2>
      {recordsToPrint.map((record) => (
        <div key={record.name}>
          {record.name} {record.number}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [records, setRecords] = useState([{ name: "Arto Hellas", number: "" }]);
  const [name, setNewName] = useState("");
  const [number, setNewNumber] = useState("");
  const [filterString, setFilterString] = useState("");

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
    setFilterString(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        name: <input value={filterString} onChange={handleFilterStringChange} />
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
      <Phonebook records={records} filterString={filterString}/>
    </div>
  );
};

export default App;
