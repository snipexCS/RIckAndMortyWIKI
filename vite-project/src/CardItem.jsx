

function CardItem(props){
    return(
         <div className="card" key={props.id}>
          <img src={props.image} alt={props.name} />
          <h2>{props.name}</h2>
          <p>Status: {props.status}</p>
          <p>Species: {props.species}</p>
          {props.type.length > 0 ? <p>Type: {props.type}</p> : null}
          <p>Gender: {props.gender}</p>
        </div>
    )
}
export default CardItem;