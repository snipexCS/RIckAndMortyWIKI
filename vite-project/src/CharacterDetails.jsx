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
            <h1>hi -{id}</h1>
            <div className="card_container">
                <div className="cardHover">
                    <div className="leftCard">
                        <img className="leftImg" src={fetchData.image} alt="" />
                    </div>
                    <div className="rightCard">
                        <p> {fetchData.name} </p>
                        <p>{fetchData.stutus} </p>
                        <p>{fetchData.species} </p>
                        <p>{fetchData.gender} </p>
                        <p>location: {fetchData?.location?.name}</p>
                        <p>origin:{fetchData?.origin?.name}</p>
                        {fetchData.type && fetchData.type.length > 0 && <p>Type: {fetchData.type}</p>}
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="cardN">
                    <div className="card__image-container">
                        <img className="card__image" src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80" alt="" />
                    </div>

                    <svg className="card__svg" viewBox="0 0 800 500">

                        <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
                        <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent" />
                    </svg>

                    <div className="card__content">
                        <h1 className="card__title">Lorem ipsum</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde perspiciatis adipisci possimus quam facere illo et quisquam quia earum nesciunt porro.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CharacterDetails;