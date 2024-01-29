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


export default Course