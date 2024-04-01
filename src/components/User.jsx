import React from 'react'

function User({ userDetails }) {
  const { firstName, lastName } = userDetails

  return (
    <div>
      <ul>
        <li>FirstName: {firstName}</li>
        <li>LastName: {lastName}</li>
      </ul>
    </div>
  )
}

export default User