import { useEffect, useState } from "react";


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
        <div>
            <h1>this is merch page</h1>
        </div>
    )
}


export default Merch;