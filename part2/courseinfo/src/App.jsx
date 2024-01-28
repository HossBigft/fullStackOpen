const Header = ({name}) =>{
  return(
    <div>
     <h1>{name}</h1>
    </div>
  )
}

const Part = ({name, exercises}) =>{
  return(
    <div> {name}: {exercises}</div>
  )
}

const Content = ({courses}) =>{
  const parts=courses.map(course =>
    <div 
      key={course["id"]}><Part name={course["name"]} exercises={course["exercises"]}/>
    </div>
  )
  
  return(
    <div>
     {parts}
    </div>
  )
}

const Total = ({courses}) =>{
  let sum= courses.reduce((acc, course)=> acc+course.exercises,0)

  return(
    <div>
     <b>Total of {sum} exercises</b>
    </div>
  )
}
const Course = ({courses}) => {


  const content = courses.map(course => {
    return(
    <div key={course.id}>
      <Header name={course.name}/>
      <Content courses={course.parts} />
      <Total courses={course.parts} />
    </div>)
  })

  return(
    <>{content}</>
  )
}

const App = () => {
  const course =  [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={course} />
}

export default App