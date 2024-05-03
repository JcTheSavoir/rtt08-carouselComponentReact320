const Card = ({currentImg}) => {
  return (
    <div className="cardContainer">

        <img src={currentImg} alt="" className="aPic" />

    </div>
  )
}
export default Card