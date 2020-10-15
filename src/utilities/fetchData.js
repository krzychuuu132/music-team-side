
export const fetchSquad = async (url) =>{

    const data  = await fetch(url);

    const response = await data.json();

    

    return response;

}