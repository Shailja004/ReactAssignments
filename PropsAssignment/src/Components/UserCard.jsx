import React from 'react'

const UserCard = ({name, age, isOnline}) => {
  return (
    <>
    <div>
    <p>Name: {name}</p>
    <p> Age: {age}</p>
    <p>Status: {isOnline ? "Online" : "Offline"} </p>
    </div>
    </>
  )
}

export default UserCard