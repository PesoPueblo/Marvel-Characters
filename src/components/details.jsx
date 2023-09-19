import { useState , useEffect } from "react";
import getOneCharact from "../source/GetOne";

export default function Details() {
    
    const [character, setCharacter]= useState([])
    useEffect(()=>{
        getOneCharact.then(data=>{
            const infos= data.data.results;
            setCharacter(infos[0])})
        },[])
        console.log(character);
       /*  const imgUrl= character.thumbnail.path+"/portrait_uncanny.jpg"
        console.log(imgUrl); */
    return(
        <div>
            <h1 style={{color: "white"}}>  {character.name}</h1>
        </div>
    )
}