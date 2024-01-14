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
  let sum=0
  for (const course of props.courses){
    console.log(course['exercises'])
    sum+=course['exercises']
  }

  return(
    <div>
     <p>Number of exercises: {sum}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name={course} />
      <Content items={parts} />
      <Total courses={parts}/>
    </div>
  )
}

export default App