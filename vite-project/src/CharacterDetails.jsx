import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CharacterDetails.css"

function CharacterDetails() {
   


    let { id } = useParams();
    let apiUrl = `https://rickandmortyapi.com/api/character/${id}`;
    let [fetchData, setFetchData] = useState([])
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setFetchData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [apiUrl]);
    console.log(fetchData)
    return (

        <div className="main_p">
            <div className="card_container">
                <div className="cardHover">
                    <div className="leftCard">
                        <img className="leftImg" src={fetchData.image} alt="" />
                    </div>
                    <div className="rightCard">
                        <p style={{ fontSize: '20px' }}>NAME: <span style={{ marginLeft: '20px' }}></span> {fetchData.name} </p>
                        <p style={{
                            fontSize: '20px',
                            color: fetchData.status  === 'Alive' ? 'green' : 'red'
                        }}>STATUS: {fetchData.status} </p>
                        <p style={{ fontSize: '20px' }}>Species : <span style={{ marginLeft: '20px' }}></span> {fetchData.species} </p>
                        <p style={{ fontSize: '20px' }}>Gender: <span style={{ marginLeft: '20px' }}></span> {fetchData.gender} </p>
                        <p style={{ fontSize: '20px' }}>Location:  <span style={{ marginLeft: '20px' }}></span>{fetchData?.location?.name}</p>
                        <p style={{ fontSize: '20px' }}>Origin: <span style={{ marginLeft: '20px' }}></span> {fetchData?.origin?.name}</p>
                        {fetchData.type && fetchData.type.length > 0 && <p>Type: <span style={{ marginLeft: '20px' }}></span> {fetchData.type}</p>}
                    </div>
                </div>

            </div>




        </div>



    )
}
export default CharacterDetails;