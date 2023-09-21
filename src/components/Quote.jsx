
const Quote = ({phrase}) => {

  return (
    <div className="contenedor-frace-payaso">
      <p className="container_phrase">{phrase.phrase}</p>
      <div className="conteinerBack_phrase">
        <img className="img_payaso" src="/images/payaso.png" alt="" />
      </div>
    </div>
  )
}

export default Quote