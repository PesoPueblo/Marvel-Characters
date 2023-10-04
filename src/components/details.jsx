import { useState , useEffect } from "react";
import {URL,  params}  from "../source/general";
import '../styles/details.css'
export default function Details() {
    
    const [character, setCharacter]= useState([])
    const [url, setUrl]=useState([])
    const [comics , setComics]= useState([])
    useEffect(()=>{
        let id= window.location.pathname
        fetch(`${URL}${id}${params}`)
        .then(data=>data.json())
        .then(data=>{
            const infos= data.data.results;
            setCharacter(infos[0]);
            setUrl(infos[0].thumbnail.path);
            setComics(infos[0].comics.items)
        })
        .catch(Error=>console.log(Error))
        },[])
        const imgUrl= url+"/portrait_uncanny.jpg"
    return(
        <main>
        <div className="container"> 
            <div className="card">
                <img src={imgUrl} alt={character.name}/> 
                <h1 style={{color: "white"}}className="name">  {character.name}</h1>
            </div>
            <div className="list">
                <h2>Apparait dans :</h2>
                <ul>
                {comics.map((comic)=>{
                    return(
                        <li key={comic.resourceURI} className="comics">{comic.name}</li>
                    )
                })}

                </ul>

            </div>
        </div>
        </main>
    )
}