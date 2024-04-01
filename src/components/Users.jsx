import React from 'react'
import User from './User'

function Users() {
  const users = [{
    firstName: 'Diksha',
    lastName: 'Jaiswal'
  },{
    firstName: 'Gajendra',
    lastName: 'Rao'
  },{
    firstName: 'Gajendra',
    lastName: 'Rao'
  },{
    firstName: 'Gajendra',
    lastName: 'Rao'
  },{
    firstName: 'Gajendra',
    lastName: 'Rao'
  },{
    firstName: 'Gajendra',
    lastName: 'Rao'
  }]
  
  return (
    <>
      {users.map((userDetails, index) => (
        <User userDetails={userDetails} key={index} />
      ))}
    </>
  )
}

export default Users