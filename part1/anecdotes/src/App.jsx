import { useState } from 'react'
 

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
}

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const vote = () => {
    let copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <div>
        <p><big><b>Anecdote of the day</b></big></p>
        {anecdotes[selected]}
      </div>
      <div>
        has {votes[selected]} votes
      </div>
      <div>
        <button onClick={() => setSelected(getRandomInt(0, anecdotes.length - 1))}>next anecdote</button>
        <button onClick={vote}>vote</button>
      </div>
      <div>
        <p><big><b>Anecdote with most votes</b></big></p>
        {anecdotes[votes.indexOf(Math.max(...votes))]}
        <div>
        has {Math.max(...votes)} votes
      </div>
      </div>
    </div>
  )
}

export default App