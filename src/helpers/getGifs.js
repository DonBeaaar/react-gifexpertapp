
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=10&api_key=uq5ZC9MTqHq1INBtjHxchflTv74w6E18`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images }) => {
      return {
        id,
        title,
        url: images?.downsized_medium.url,
      };
    });
    // console.log(gifs);
    return gifs;
  };