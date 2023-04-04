import React, {useState} from 'react'
import './App.css'
import CustomerList from './CustomerList'
import Laskuri from './Laskuri'
import Message from './Message'
import Posts from './Posts'

function App() {

  // State määritys
const [showLaskuri, setShowLaskuri] = useState(false)
// Statet messagen näyttämistä varten
const [showMessage, setShowMessage] = useState(false)
const [message, setMessage] = useState('')
const [isPositive, setIsPositive] = useState(false)


  return (
    <div className="App">

      <h1>Northwind Traders Ltd.</h1>

      {showMessage && <Message message={message} isPositive={isPositive} />}

      <CustomerList setShowMessage={setShowMessage} setMessage={setMessage} setIsPositive={setIsPositive} />

      {showLaskuri ? <button onClick={() => setShowLaskuri(false)}>piilota laskuri</button> : 
      <button onClick={() => setShowLaskuri(true)}>näytä laskuri</button>}

      {!showLaskuri && <button onClick={() => setShowLaskuri(true)}>näytä laskuri</button>}
      {showLaskuri && <button onClick={() => setShowLaskuri(false)}>piilota laskuri</button>}

      {showLaskuri &&<Laskuri viesti="Tervehdys app komponentista" />}
    
      <Posts />


    </div>
  )
}

export default App
