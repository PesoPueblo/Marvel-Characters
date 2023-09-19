import React from "react";
import { useState , useEffect } from "react";
import getAllCharaters from "../source/Getall";
import '../styles/characts.css';
import { Link } from "react-router-dom";
export default function Gallery(){

    const [characters , setCharacers] = useState([]);
    useEffect(()=>{
        getAllCharaters.then(data=>{setCharacers(data.data.results)})
    },[]);

    return(
        <div className="gallery">
            {characters.map((character)=>{
                const path= character.thumbnail.path
                const imgUrl = path+"/portrait_uncanny.jpg"
                return(
                    <Link to={`/${character.id}`} className="card" key={character.id}>
                        <img src={imgUrl} alt="illustration du personnage" />
                        <h2 className="name">{character.name}</h2>

                    </Link>
                )
            })}

        </div>
    )
}