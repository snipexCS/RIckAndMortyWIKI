import "./CardItem.css";

function CardItem(props) {
  return (
    <div className="card" key={props.id}>
      <div
        className="card-cover"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="card-info">
          <h2>{props.name}</h2>
          <p>Status: {props.status}</p>
          <p>Species: {props.species}</p>
          {props.type && props.type.length > 0 && <p>Type: {props.type}</p>}
          <p>Gender: {props.gender}</p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
