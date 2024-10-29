import axios from "axios";



export const fetchMovieDetails=async(movie_id)=>{
    try {
        const res=await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=29bb4dc65b5553ee27a4ca58c3530a52&language=en-US`);
        let data=res.data;
        // console.log(data);
        return data;
        
    } catch (error) {
        console.log(`Error fetching data from page ${movie_id}:`,error);
        return {};
        
    }
}

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=29bb4dc65b5553ee27a4ca58c3530a52&language=en-US