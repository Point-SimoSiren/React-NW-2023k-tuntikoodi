import './App.css'
import React, {useState} from 'react'

const Laskuri = (props) => {

const [luku, setLuku] = useState(0)
 
   return (
     <>
       <h2>Laskuri</h2>
       <h2>{luku}</h2>

        <button onClick={() => setLuku(luku + 1)}>+</button>
        <button onClick={() => setLuku(luku - 1)}>-</button>
        <button onClick={() => setLuku(0)}>0</button>

        <br />

        <p>{props.viesti}</p>

     </>
   )
 }
 
 export default Laskuri
