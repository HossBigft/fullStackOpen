import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) =>{
    event.preventDefault()
    const inputName = {
      name: newName
    }
    if (!persons.map(person =>person.name).includes(inputName.name))
      setPersons(persons.concat(inputName))
     else
      window.alert(`${inputName.name} is already added to phonebook`)
    
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        
        <div>
          name: <input
                value={newName}
                onChange={handleNameChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(entry => <div key={entry.name}>{entry.name}</div>)}
    </div>
  )
}

export default App