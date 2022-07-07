import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const WorkoutForm = () => {
const [title, setTitle] = useState("");
const [load, setLoad] = useState("");
const [repetition, setRepetition] = useState("");
const [error, setError] = useState(null);


const handleSubmit = async (e) => {
  e.preventDefault()

  const workout = {title, load, repetition}

  const response = await fetch("/api/workouts", {
    method: "POST",
    body: JSON.stringify(workout),
    headers: {
      "Content-Type": "application/json",
    }
  })
  const json = await response.json()

  if(!response.ok) {
    setError(json.error)
  }
  if (response.ok) {
    setTitle("")
    setLoad("")
    setRepetition("")
    setError(null)
    console.log("new workout added", json)
  }
}

  return (
  <div>
  <form className="create" onSubmit={handleSubmit}>
    <h3>Add a New Workout</h3>
    <label>Exersixe Title:</label>
    <input 
    type="text"
    onChange={(e) => setTitle(e.target.value)}
    value={title}
    />
    <label>Load (in kg):</label>
    <input 
    type="text"
    onChange={(e) => setLoad(e.target.value)}
    value={load}
    />
    <label>Repetitions:</label>
    <input 
    type="text"
    onChange={(e) => setRepetition(e.target.value)}
    value={repetition}
    />
    <button>Add Workout</button>
    {error && <div className="error">{error}</div>}
  </form>
  </div>
  )
}

export default WorkoutForm