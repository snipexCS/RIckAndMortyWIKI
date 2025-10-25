
import "./Allcharacters.css";
import { useState,useEffect, use } from "react";
import CardItem from "./CardItem";



function Allcharacters() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  let apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;

const hadnleNextPage = () => {
  setPage(page + 1);
}
const hadnlePrevPage = () => {
  if(page > 1){
    setPage(page - 1);
  }
}




  
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setPosts(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, [apiUrl]);

console.log(posts);
  return (
    <div className="characters_container">
      

  <div className="content_wrapper">
   
    <div className="inputs">
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
    <div className="cards_container">
      {posts.map((post) => (
        
        <div className="card" key={post.id}>
          <CardItem image={post.image} name={post.name} status={post.status} species={post.species}
          type={post.type} gender = {post.gender} />
          
        </div>
      ))}
    </div>

   <img src={post.image} alt={post.name} />
          <h2>{post.name}</h2>
          <p>Status: {post.status}</p>
          <p>Species: {post.species}</p>
          {post.type.length > 0 ? <p>Type: {post.type}</p> : null}
          <p>Gender: {post.gender}</p>
      
      
    
    
<div className="tabs">
  <div className="tab-group">
    <input checked="" readOnly id="tab1" name="tab" value="1" type="radio" />
    <label htmlFor="tab1">
     <span onClick={hadnlePrevPage}>-</span>
    </label>
  </div>
  <div className="tab-group">
    <input id="tab3"  readOnly name="tab" value="3" type="radio" />
    <label htmlFor="tab3">
      <span onClick={hadnleNextPage}>+</span>
    </label>
  </div>
</div>
</div>

  </div>


  );
}
export default Allcharacters;