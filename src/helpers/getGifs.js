export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)  }&limit=10&api_key=A96FhG0vHwQk4gXGI7kOfoqrf1QdCg1G`;
    const respFetch = await fetch(url);
    const {data} = await respFetch.json(); 
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });
     
    return gifs;
}