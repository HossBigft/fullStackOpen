import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = ({text,value}) => {

  if (text==="positive") {
    return(
      <tr>
        <td>{text}</td> 
        <td>{value}</td>
        <td>%</td>
      </tr>
    )
  }
  
  return (
    <tr>
        <td>{text}</td> 
        <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good,bad,neutral}) => {
  const sum = good + bad + neutral
  if (good+bad+neutral ===0){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <div>
      <big><b>Statistics</b></big>
    <table>
      <tbody>
        
              < StatisticLine text="good" value={good} />
              < StatisticLine text="neutral" value={neutral} />
              < StatisticLine text="bad" value={bad} />
              < StatisticLine text="all" value={sum} />
              < StatisticLine text="average" value={(good+bad*-1)/sum} />
              < StatisticLine text="positive" value={(good/sum)*100} />
           
      </tbody>
    </table>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
          <big><b>Give feedback</b></big>
          <div>
            <Button handleClick={() => setGood(good+1)} text="good" />
            <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
            <Button handleClick={() => setBad(bad+1)} text="bad" />
          </div>
          < Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App