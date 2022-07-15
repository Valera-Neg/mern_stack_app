import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
const { dispatch } = useWorkoutsContext()
const [title, setTitle] = useState("");
const [load, setLoad] = useState("");
const [repetition, setRepetition] = useState("");
const [error, setError] = useState(null);
const [emptyFields, setEmptyFields] = useState([])


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
    setEmptyFields(json.emptyFields)
  }
  if (response.ok) {
    setTitle("")
    setLoad("")
    setRepetition("")
    setError(null)
    setEmptyFields([])
    console.log("new workout added", json)
    dispatch({type: "CREATE_WORKOUT", payload: json})
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
    className={emptyFields.includes("title") ? "error" : ""}
    />
    <label>Load (in kg):</label>
    <input 
    type="text"
    onChange={(e) => setLoad(e.target.value)}
    value={load}
    className={emptyFields.includes("load") ? "error" : ""}
    />
    <label>Repetitions:</label>
    <input 
    type="text"
    onChange={(e) => setRepetition(e.target.value)}
    value={repetition}
    className={emptyFields.includes("repetition") ? "error" : ""}
    />
    <button>Add Workout</button>
    {error && <div className="error">{error}</div>}
  </form>
  </div>
  )
}

export default WorkoutForm