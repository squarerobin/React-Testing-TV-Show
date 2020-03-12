import axios from 'axios'

// abstracting
export const getEpisodes = () => {
    return axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res =>  res)
    
       /*  setShow(res.data);
        setSeasons(formatSeasons(res.data._embedded.episodes)); */
      
}

   