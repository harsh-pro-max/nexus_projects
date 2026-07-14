function Card(props){
    return (
        <div className="card">
            <img src={props.image} className="cardImg"/>

            <h2 className="cardTitle">{props.cloth} ₹{props.Price} </h2> 

            <h3 className="cardOffer">{props.Offer}</h3>

            <h4 className="shopNow">Shop Now</h4>
        </div>
    )
}
export default Card;