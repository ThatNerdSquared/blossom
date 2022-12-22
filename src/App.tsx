import { useState } from 'react'
import randomAffirmation from './affirmations'
import './App.css'

function App() {
  const [affirmation, setAffirmation] = useState<string>(randomAffirmation())

  const refreshAffirmation = () => {
    setAffirmation(randomAffirmation())
  }

  const tempBg = [
    "linear-gradient(to right, #ede9fe, #dbeafe)",
    "linear-gradient(to right, #FCE6DB, #E6CCE8)",
    "linear-gradient(to right, #ccd5ae, #fefae0)",
    "linear-gradient(to right, #eae4e9, #fad2e1)",
    "linear-gradient(to right, #99a9e6, #e2b6cf)"
  ]

  const appStyle = {
      minWidth: "100%",
      minHeight: "100%",
      backgroundImage: tempBg[Math.floor(Math.random() * tempBg.length)],
      backgroundSize: "cover",
      justifyContent: "center",
      alignContent: "center",
      overflow: "hidden",
  }

  return (
    <div
      className="App"
      style={appStyle}
    >
      <div
        className="content"
        onClick={() => refreshAffirmation()}
      >
        <h1 key={affirmation}>{affirmation}.</h1>
        <p key={Math.random()}>Click to refresh</p>
      </div>
    </div>
  )
}

export default App
