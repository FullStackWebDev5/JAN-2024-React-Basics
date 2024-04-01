import React, { useState } from 'react'

function Component1() {
  const [count, setCount] = useState(0)
  const [fullName, setFullName] = useState('Diksha')

  const styles = {
    container: {
      textAlign: 'center', 
      fontSize: '15em'
    },
    button: {
      padding: '10px',
      fontSize: '20px',
      border: 'none',
      backgroundColor: 'black',
      color: 'white'
    }
  }

  const increment = () => {
    setCount(count + 1)
  }

  const changeName = () => {
    setFullName('Sasidhar')
  }

  return (
    <div style={styles.container}>
      Likes: {count}
      <div>
        <button style={styles.button} onClick={increment}>Increment</button>
      </div>
      {fullName}
      <div>
        <button style={styles.button} onClick={changeName}>Change Name</button>
      </div>
    </div>
  )
}

export default Component1


/*
  Hooks: Simple functions of React to performs tasks efficiently 
    - useState (Creation of states in React components)
      // const [state, stateHandler] = useState(defaultValue)

  Before introductions of hooks,
  - States could only be created in Class-based component

  After hooks was introduced
  - States could also be created in Function-based component, Now you could create a React application with all function-based components
*/