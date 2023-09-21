import "./App.css"
import Quote from "./components/Quote"
import BtnQuote from "./components/BtnQuote"
import { useState } from "react"
import phrases from "./utils/phrases.json"
import getRandomArray from "./utils/getRandomArray"


function App() {

const phraseRandom = getRandomArray(phrases)
const numberRandom = getRandomArray([1, 2, 3, 4]) // Pasamos este getRandomArray([1, 2, 3, 4]) a button onClick de "handleRandomPhrase" de BtnQuote.

const [quote, setQuote] = useState(phraseRandom)
const [numberBg, setNumberBg] = useState(numberRandom)

const bgStyle = {
  backgroundImage: `url(/images/fondo${numberBg}.jpg)`
}

  return (
    <div className="container" style={bgStyle}>
      <img className="image_canasta" src="/images/galletaFortuna.png" alt="" />
      
      <div className="contenedorTitulo">
        <h1 >La suerte toca a su puerta.✨</h1>
      </div>
      
      <Quote 
      phrase = {quote}
      
      />
      <BtnQuote 
      setQuote = {setQuote} 
      phrases = {phrases}
      setNumberBg = {setNumberBg} /* colocamos la prop {setNumberBg} para cambiar la lista ed numeros del (1 al 4)   */
      />
    </div>
  )
}

export default App
