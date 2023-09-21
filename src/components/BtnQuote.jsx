import getRandomArray from "../utils/getRandomArray"

const BtnQuote = ({ setQuote, phrases, setNumberBg }) => {

    const handleRandomPhrase = () => {
    setQuote(getRandomArray(phrases))
    setNumberBg(getRandomArray([1, 2, 3, 4]))
    }
return (
    <button className="container_btn" onClick={handleRandomPhrase}>Cambio de frase</button>
)
}

export default BtnQuote