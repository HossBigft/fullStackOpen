import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '12312312' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addNumber = (event) =>{
    event.preventDefault()
   const inputNumber = {
      name:newName, number: newNumber
    }
   setPersons(persons.concat(inputNumber))

    setNewNumber('')
  }


  const addName = (event) =>{
    event.preventDefault()
    const inputName = {
      name: newName, number: ''
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
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        
        <div>
          name: <input
                value={newName}
                onChange={handleNameChange}
                />
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
        {persons.map(entry => <div key={entry.name}>{entry.name}:{entry.number}</div>)}
    </div>
  )
}

export default App