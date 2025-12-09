import "./CardItem.css";
import { Link } from "react-router-dom";

function CardItem(props) {
  

  return (
    <Link to={`${props.test}${props.id}`} style={{ textDecoration: 'none' }}   onClick={() => {
        sessionStorage.setItem("scrollPosition", window.scrollY);
      }} >
      <div className="card" key={props.id}>
  <div className="card-cover-wrapper">
    <img
      className="card-cover"
      src={props.image}
      alt={props.name}
      loading="eager" 
    />
    <div className="card-info">
      <h2>{props.name}</h2>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      {props.type && props.type.length > 0 && <p>Type: {props.type}</p>}
      <p>Gender: {props.gender}</p>
    </div>
  </div>
</div>

    </Link>
  );
}

export default CardItem;
