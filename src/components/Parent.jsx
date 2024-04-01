import React from 'react'
import Child from './Child'

function Parent() {
  const dikshaDetails = {
    firstName: 'Diksha',
    lastName: 'Jaiswal'
  }
  
  return (
    <Child dikshaDetails={dikshaDetails} likesIcream={true} />
  )
}

export default Parent