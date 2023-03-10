import { useEffect, useState } from 'react'
import './App.css'

interface BlossomResponse {
  affirmation: string; 
}

function App() {
  const [affirmation, setAffirmation] = useState<string>()

  const refreshAffirmation = () => {
    const fetchAffirmation = async () => {
      const res = await fetch('/api/get_positive', { method: 'GET' })
      const data: BlossomResponse = await res.json()
      setAffirmation(data.affirmation)
    }
    fetchAffirmation()
  }

  useEffect(() => refreshAffirmation(), [])

  const tempBg = [
    "linear-gradient(to right, #ede9fe, #dbeafe)",
    "linear-gradient(to right, #FCE6DB, #E6CCE8)",
    "linear-gradient(to right, #ccd5ae, #fefae0)",
    "linear-gradient(to right, #eae4e9, #fad2e1)",
    "linear-gradient(to right, #99a9e6, #e2b6cf)"
  ]

  const appStyle = {
    minWidth: "100vw",
    minHeight: "100vh",

    backgroundImage: tempBg[Math.floor(Math.random() * tempBg.length)],
    backgroundSize: "cover",
    overflow: "hidden",

    display: "grid",
    gridTemplateColumns: "1fr",
    justifyItems: "center",
    alignItems: "center"
  }

  return (
    <div
      className="App"
      style={appStyle}
      onClick={() => refreshAffirmation()}
    >
      <div className="content">
        <h1 key={affirmation}>{affirmation}</h1>
        <p key={Math.random()}>Click to refresh</p>
      </div>
    </div>
  )
}

export default App
