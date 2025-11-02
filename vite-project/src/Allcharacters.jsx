
import "./Allcharacters.css";
import { useState, useEffect, use } from "react";
import CardItem from "./CardItem";



function Allcharacters() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('')
  let apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`;


 


  const handlePrevGroup = () => {
    if (startPage > 1) {
      setStartPage(startPage - 5);
      setPage(startPage - 5);
    }
  };

  const handleNextGroup = () => {
    if (startPage + 5 <= totalPages) {
      setStartPage(startPage + 5);
      setPage(startPage + 5);
    }
  };



  const getVisiblePages = () => {
    const pages = [];
    for (let i = startPage; i < startPage + 5 && i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handleChange = (event) => {
    setSearch(event.target.value)
    console.log(event.target.value)
    setPage(1);
    setStartPage(1);
  }






  useEffect(() => {
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.info && data.results) {
          setPosts(data.results);
          setTotalPages(data.info.pages);
        } else {
          setPosts([]);
          console.warn("Invalid response or out of range page:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [page, search]);



  console.log(posts);
  console.log(totalPages)
  return (
    <div className="characters_container">


      <div className="content_wrapper">


        <div className="inputs">
          <input type="text" value={search} onChange={handleChange} />
        </div>
        <h1 className="nice">All characters</h1>

        <div className="cards_container">
          {posts.map((post) => (

            <div className="card" key={post.id}>
              <CardItem test='/allcharacters/' id={post.id} image={post.image} name={post.name} status={post.status} species={post.species}
                type={post.type} gender={post.gender} />

            </div>
          ))}
        </div>




        <div className="tabs">
          <div className="tab-group">
            <input checked="" readOnly id="tab1" name="tab" value="1" type="radio" />
            <label htmlFor="tab1">
              <span onClick={handlePrevGroup}>PREV</span>
            </label>
          </div>
          <div className="pagination">

            {getVisiblePages().map((pg) => (
              <button
                key={pg}
                className={pg === page ? "active" : ""}
                onClick={() => setPage(pg)}
              >
                {pg}
              </button>
            ))}
          </div>

          <div className="tab-group">
            <input id="tab3" readOnly name="tab" value="3" type="radio" />
            <label htmlFor="tab3">
              <span onClick={handleNextGroup}>NEXT</span>
            </label>
          </div>
        </div>
      </div>

    </div>


  );
}
export default Allcharacters;