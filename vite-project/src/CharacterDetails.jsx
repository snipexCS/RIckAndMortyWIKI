import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CharacterDetails(){
    let{id} = useParams();
    let apiUrl = `https://rickandmortyapi.com/api/character/${id}`;
    let[fetchData,setFetchData] = useState([])
    useEffect(() => {
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => setFetchData(data))
          .catch((error) => console.error("Error fetching data:", error));
      }, [apiUrl]);
    console.log(fetchData)
    return (

        <div>
            <h1>hi -{id}</h1>
        </div>
    )
}
export default CharacterDetails;