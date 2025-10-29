import React, { createContext, useContext, useState } from 'react'

const JSONInputContext = createContext()

export const useJSONInput = () => {
  const context = useContext(JSONInputContext)
  return context
}

export const JSONInputProvider = ({ children }) => {
  const defaultJSONValue = `{
  "name": "Sumit Kumar",
  "age": 25,
  "email": "sumit@example.com",
  "isStudent": false,
  "skills": ["HTML", "CSS", "JavaScript", "React"],
  "address": {
    "city": "Moradabad",
    "state": "Uttar Pradesh",
    "country": "India"
  },
  "projects": [
    {
      "title": "Portfolio Website",
      "year": 2024,
      "completed": true
    },
    {
      "title": "News Portal",
      "year": 2025,
      "completed": false
    }
  ]
}
`
  
  const [jsonValue, setJsonValue] = useState(defaultJSONValue)

  const updateJsonValue = (value) => {
    setJsonValue(value)
  }

  const clearJsonValue = () => {
    setJsonValue('')
  }

  const value = {
    jsonValue,
    updateJsonValue,
    clearJsonValue
  }

  return (
    <JSONInputContext.Provider value={value}>
      {children}
    </JSONInputContext.Provider>
  )
}
