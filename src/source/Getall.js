import {URL,  params}  from "../source/general";


export const getAllCharacters = fetch(`${URL}${params}`)
            .then(data=>data.json())


export default getAllCharacters