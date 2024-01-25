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
const Course = ({course}) => {

  return(
    <div>
    <Header name={course["name"]} />
    <Content courses={course["parts"]} />
    <Total courses={course["parts"]} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}

export default App