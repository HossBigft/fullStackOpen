const Header = (props) =>{
  return(
    <div>
     <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) =>{
  return(
    <div> {props.content["name"]}: {props.content["exercises"]}</div>
  )
}

const Content = (props) =>{
  const courses=props.items.map(course =><div key={course["name"]}><Part content={course}/> </div>)
  
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name={course} />
      <Content items={[part1,part2,part3]} />
      <Total num={part1["exercises"] + part2["exercises"] + part3["exercises"]}/>
    </div>
  )
}

export default App