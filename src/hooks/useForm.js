import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [value, setValues] = useState(initialState)

  const reset = ()  =>{
    setValues(initialState)
  }

  const handleInputChange = ({target}) => {
    setValues({
      ...value,
      [target.name]: target.value
    })
  }

  return [value, handleInputChange, reset]
}
