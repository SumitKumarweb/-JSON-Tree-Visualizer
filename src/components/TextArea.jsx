import React from 'react'
import './components.css'
function TextArea() {
  const placeholder = `{
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
  return (
    <div id='textArea'>
        <span>Paste or type JSON data</span>
        <textarea placeholder={placeholder}/> 
        <button className='btn'>Generate Tree</button>
    </div>
  )
}

export default TextArea