import { useState } from 'react'
import randomAffirmation from './affirmations'
import './App.css'

function App() {
  const [affirmation, setAffirmation] = useState<string>(randomAffirmation())

  const refreshAffirmation = () => {
    setAffirmation(randomAffirmation())
  }

  const tempBg = [
    `url(https://images.unsplash.com/photo-1661457000438-550ec1b2af91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
    `url(https://images.unsplash.com/photo-1564612123554-78943ddb2ba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)`
  ]

  const appStyle = {
      minWidth: "100%",
      minHeight: "100%",
      backgroundImage: tempBg[Math.floor(Math.random() * tempBg.length)],
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      // display: "grid",
      // gridTemplateColumns: "1fr",
      justifyContent: "center",
      alignContent: "center",
      overflow: "hidden",
  }

  return (
    <div
      className="App"
      style={appStyle}
    >
      <div className="content">
        <h1>{affirmation}.</h1>
        <button onClick={() => refreshAffirmation()}>Give me another one!</button>
      </div>
    </div>
  )
}

export default App
