import { useState, useEffect } from "react";
import recordService from "./services/records";
const Record = ({ record }) => {
  return (
    <div key={record.name}>
      {record.name} {record.number}
    </div>
  );
};
const Phonebook = ({ records, filterString }) => {
  const recordsToPrint =
    filterString.length === 0
      ? records
      : records.filter((record) =>
          record.name.toLowerCase().includes(filterString.toLowerCase())
        );
  return recordsToPrint.map((record) => (
    <Record key={record.name} record={record} />
  ));
};

const RecordForm = ({
  name,
  number,
  onAddRecord,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <div>
      <form onSubmit={onAddRecord}>
        <div>
          name: <input value={name} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={number} onChange={handleNumberChange} />
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  );
};

const Filter = ({ filterString, handler }) => {
  return (
    <div>
      <div>
        name: <input value={filterString} onChange={handler} />
      </div>
    </div>
  );
};

const App = () => {
  const [records, setRecords] = useState([]);
  const [name, setNewName] = useState("");
  const [number, setNewNumber] = useState("");
  const [filterString, setFilterString] = useState("");

  useEffect(() => {
    recordService.getAll().then((response) => {
      console.log(response.data);
      setRecords(response.data);
    });
  }, []);

  const addRecord = (event) => {
    event.preventDefault();
    const newRecord = {
      name: name,
      number: number,
    };

    if (records.some((record) => record.name === newRecord.name))
      window.alert(`${newRecord.name} is already added to phonebook`);
    else
      recordService.create(newRecord).then((response) => {
        setRecords(records.concat(response.data));
        setNewName("")
        setNewNumber("")
      });
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
      <Filter filterString={filterString} handler={handleFilterStringChange} />
      <h2>add a new</h2>
      <RecordForm
        name={name}
        number={number}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        onAddRecord={addRecord}
      />
      <h2>Numbers</h2>
      <Phonebook records={records} filterString={filterString} />
    </div>
  );
};

export default App;
