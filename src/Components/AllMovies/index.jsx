import axios from "axios";



const fetchMoviesFromPage=async(page)=>{
    try {
        const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=29bb4dc65b5553ee27a4ca58c3530a52&language=en-US&page=${page}`);
        return res.data.results;
        
    } catch (error) {
        console.log(`Error fetching data from page ${page}:`,error);
        return [];
        
    }
}

export const getAllMovies= async()=>{
    let arr=[];
    for(let i=1;i<=20;i++){
        arr.push(fetchMoviesFromPage(i));
    }
    const movieArr=await Promise.all(arr);
    // console.log(movieArr);
    
    return movieArr;
};

// https://api.themoviedb.org/3/movie/popular?api_key=29bb4dc65b5553ee27a4ca58c3530a52&language=en-US&page=1