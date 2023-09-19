var md5 = require ('md5')
const ts= Date.now();
const publicKey = process.env.React_App_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;
const hash = md5(ts+privateKey+publicKey);
const URL= "https://gateway.marvel.com/v1/public/characters"
const params = `?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=100`


export const getAllCharacters = fetch(`${URL}${params}`)
            .then(data=>data.json())


export default getAllCharacters