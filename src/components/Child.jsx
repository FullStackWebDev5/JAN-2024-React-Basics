import React from 'react'

function Child({ dikshaDetails, likesIcream }) {
  const { firstName, lastName } = dikshaDetails

  return (
    <div>
      <ul>
        <li>FirstName: {firstName}</li>
        <li>LastName: {lastName}</li>
        {likesIcream && <li>This person likes icecream</li>}
      </ul>
    </div>
  )
}

export default Child