import React from "react";
import { useState , useEffect } from "react";
import {URL,  params}  from "../source/general";
import '../styles/characts.css';
import { Link } from "react-router-dom";
export default function Gallery(){

    const [characters , setCharacers] = useState([]);
    let offset=0;
    let limit=28 ;
    let getallwork= fetch(`${URL}${params}&limit=${limit}&offset=${offset}`)
            .then(data=>data.json())
    useEffect(()=>{getallwork.then(data=>{
                setCharacers(data.data.results)})
    },[]);
    
    return(
        <div>
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
            <div>
            <i className="fa-solid fa-angle-left" ></i>
            
            <i className="fa-solid fa-angle-right" ></i>  
            </div>   
        </div>
    )
}