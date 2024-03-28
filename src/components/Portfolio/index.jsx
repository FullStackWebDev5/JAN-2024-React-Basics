import './index.css'

function Portfolio() {
  const sahilDetails = {
    name: 'Sahil Singh',
    age: 25,
    city: 'Bangalore',
    isGraduated: false,
    education: {
      graduation: {
        year: 2022,
        degree: 'B.Tech',
        university: 'IIT Kharagpur',
        marks: '86%'
      },
      matriculation: {
        year: 2019,
        school: 'DPS',
        marks: '90%'
      }
    },
    hobbies: ['Swimming', 'Dancing', 'Singing', 'Listening to music', 'Coding', 'Designing', 'Watching movies']
  }

  return (
    <div className='container'>
      <h1>{sahilDetails.name}</h1>
      <div>
        <h2>Basic Details</h2>
        <p>Age: {sahilDetails.age}</p>
        <p>City: {sahilDetails.city}</p>
        <h2>Education</h2>
        {sahilDetails.isGraduated && <span className='graduated-badge'>Graduated</span>}
        <div>
          <h4>Graduation</h4>
          <ul>
            <li>Year: {sahilDetails.education.graduation.year}</li>
            <li>Degree: {sahilDetails.education.graduation.degree}</li>
            <li>University: {sahilDetails.education.graduation.university}</li>
            <li>Marks: {sahilDetails.education.graduation.marks}</li>
          </ul>
        </div>
        <div>
          <h4>Matriculation</h4>
          <ul>
            <li>Year: {sahilDetails.education.matriculation.year}</li>
            <li>School: {sahilDetails.education.matriculation.school}</li>
            <li>Marks: {sahilDetails.education.matriculation.marks}</li>
          </ul>
        </div>
        <h2>Hobbies</h2>
        <ul>
          {sahilDetails.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;

/*
  Props

  In HTML: Tags and attributes
  In React: Components and props

  JavaScript Expression inside JSX should be used with {}

  // Styling
  1. Inline: {{}}
  2. Internal: Style object
  3. External: .css file

  // Internal Style
  const style1 = {
    backgroundColor: '#DCDCDC',
    padding: '20px',
    margin: '10px',
  }

  // Fragments: Can be used to encapsulated multiple elements in one single parent

  // Conditional Rendering

  // Rendering Lists
  {sahilDetails.hobbies.map(function(hobby, index) {
    return (
      <li key={index}>{hobby}</li>
    )
  })}
*/