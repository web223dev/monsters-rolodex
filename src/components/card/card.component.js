import React from 'react'
import './card.style.css'

export const Card = ( props ) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`} alt={props.monster.name} />
      <h1>{props.monster.name}</h1>
    </div>
  )
}