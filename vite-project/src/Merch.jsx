import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import './Merch.css'


function Merch(){
    const [state,setState] = useState([])
    let apiUrl = 'http://127.0.0.1:8000/products/'
     useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setState(data))
            .catch((error) => console.error("Error fetching data:", error));
    },[]);
    console.log(state)
    
    return (
        <div className="container_p">
            <h1>this is merch page</h1>
            {state.map((item,i)=>{
                return <div className="merch_container" key={i}>
                    <p>{item.id}</p>
                    <p>{item.product_description}</p>
                    <p>{item.product_price}</p>
                    <p>{item.product_price}</p>
                    <p>{item.product_name}</p>
                    <p>{item.product_type}</p>
                    <p>{item.rating}</p>
                    </div>
            })}
        </div>
    )
}


export default Merch;