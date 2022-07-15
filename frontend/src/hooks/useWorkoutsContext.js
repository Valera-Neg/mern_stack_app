import { WorkoutsContext } from "../contex/WorkoutsContext";
import {useContext} from 'react'

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext)

  if (!context) {
    throw Error('useWorcoutsContext must be inside an WorkoutsContextProvider')
  }

  return context
}