import "./Allcharacters.css";
import { useState, useEffect } from "react";
import CardItem from "./CardItem";

function Allcharacters() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [startPage, setStartPage] = useState(1);
  const [search, setSearch] = useState("");
  const savedPage = sessionStorage.getItem("currentPage");
const [page, setPage] = useState(savedPage ? parseInt(savedPage, 10) : 1);



  useEffect(() => {
    const savedPosition = sessionStorage.getItem("scrollPosition");
    if (savedPosition && posts.length > 0) {
      setTimeout(() => {
        window.scrollTo(0, parseFloat(savedPosition));
        sessionStorage.removeItem("scrollPosition");
      }, 0);
    }
  }, [posts]);


  const updatePage = (pg) => {
    setPage(pg);
  };


  useEffect(() => {
    const groupStart = Math.floor((page - 1) / 5) * 5 + 1;
    setStartPage(groupStart);
  }, [page]);



  const handlePrevGroup = () => {
    if (startPage > 1) {
      const newStart = startPage - 5;
      setPage(newStart + 4);
    }
  };

  const handleNextGroup = () => {
    if (startPage + 5 <= totalPages) {
      const newStart = startPage + 5;
      setPage(newStart);
    }
  };

  const getVisiblePages = () => {
    const pages = [];
    for (let i = startPage; i < startPage + 5 && i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };
  
  useEffect(() => {
  sessionStorage.setItem("currentPage", page);
}, [page]);




 useEffect(() => {
  const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      if (data.info && data.results) {
        setPosts(data.results);
        setTotalPages(data.info.pages);
      } else {
        setPosts([]);
        console.warn("Invalid response or out of range page:", data);
      }
    })
    .catch((err) => console.error(err));
}, [page, search]);


  return (
    <div className="characters_container">
      <div className="content_wrapper">
        <div className="inputs">
          <input
          placeholder="Search by Name"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="characters_s"
        
          />

        </div>
        <h1 className="nice">Characters</h1>

        <div className="cards_container">
          {posts.map((post) => (
            <div className="card" key={post.id}>
              <CardItem
                test="/allcharacters/"
                id={post.id}
                image={post.image}
                name={post.name}
                status={post.status}
                species={post.species}
                type={post.type}
                gender={post.gender}
              />
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
                className={pg === page ? "active" : "btns"}
                onClick={() => updatePage(pg)}
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