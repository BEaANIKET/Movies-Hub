

export const getDataApi = async (query) => {

  const url = `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${query}&count=250`;

  try {
    const response = await fetch(url);
    const result = await response.json();
	  return result
  } catch (error) {
	  return new Error(error?.message)
  }
};
