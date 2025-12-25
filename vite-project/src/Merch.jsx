import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import "./Merch.css";

function Merch() {
  const [state, setState] = useState([]);
  const [bucket, setBucket] = useState([]);
  const [bucketEmpty, setBucketEmpty] = useState(true);

  let sumOfAll = () => {
    return Math.floor(
      bucket.reduce((sum, char) => sum + char.product_price, 0)
    );
  };

  let handleAdd = (item) => {
    setBucket((prev) => [...prev, item]);
    bucket.length > 0 ? setBucketEmpty(false) : setBucketEmpty(true);
  };
  console.log(bucket);
  console.log(sumOfAll());

  let apiUrl = "http://127.0.0.1:8000/products/";
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setState(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(state);

  return (
    <div className="merchPage_container">
      <h1>this is merch page</h1>
      <div className="Bucket_Container">
        {bucket.length}
        {bucket.map((item) => {
          return <div  key= {item.id} className="Bucket">
            <p>{item.product_name}</p>
            <p>{item.product_price}</p>
          </div>
        })}
       <p>{sumOfAll()}</p> 
      </div>
      <div className="test">
        {state.map((item, i) => {
          return (
            <div className="merchItem_wrapper" key={i}>
              <div className="merchCard">
                <div className="merchCard_img">
                  <img
                    className="merchCard_image"
                    src={item.product_img}
                    alt=""
                  />
                </div>
                <div className="merchCard_title">{item.product_name}</div>
                <div className="merchCard_subtitle">
                  {item.product_description}
                </div>
                <hr className="merchCard_divider" />
                <div className="merchCard_footer">
                  <div className="merchCard_price">
                    <span>$</span> {item.product_price}
                  </div>
                  <button
                    className="merchCard_btn"
                    onClick={() => handleAdd(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                      <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                      <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                      <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Merch;
