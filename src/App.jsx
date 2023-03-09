import { useState } from 'react'
import './App.css'
import { Form } from './Form'
import { Card } from './Card'
import { Error } from "./Error";


function App() {

  const [nameValue, setNameValue] = useState('');
  const [serieValue, setSerieValue] = useState('');
  const [errorValue, setErrorValue] = useState('');
  const [showCard, setShowCard] = useState(false);
  
  


  return (
    <div className="App">
      <Form  nameValue={nameValue} serieValue={serieValue} setNameValue={setNameValue} setSerieValue={setSerieValue} errorValue={errorValue} setErrorValue={setErrorValue} 
      showCard={showCard} setShowCard={setShowCard}></Form>
      {errorValue ? <Error msj={errorValue}></Error> : undefined}
      {showCard ? <Card nameValue={nameValue} serieValue={serieValue}></Card> : undefined}
    </div>

  )
}

export default App
