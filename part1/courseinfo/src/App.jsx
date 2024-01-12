const Header = (props) =>{
  return(
    <div>
     <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) =>{
  return(
    <p key={props.content[1]}>{props.content[0]}: {props.content[1]}</p>
  )
}

const Content = (props) =>{
  const courses=props.items.map(course =><Part content={course} />)
  
  return(
    <div>
     {courses}
    </div>
  )
}

const Total = (props) =>{
  return(
    <div>
     <p>Number of exercises: {props.num}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content items={[[part1,exercises1],[part2,exercises2],[part3,exercises3]]} />
      <Total num={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App