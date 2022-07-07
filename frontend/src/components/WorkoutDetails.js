import React from 'react'

export default function WorkoutDetails({workout}) {
  return (
    <div className='workout-details'>
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps:: </strong>{workout.repetition}</p>
      <p>{workout.createdAt}</p>
    </div>
  )
}