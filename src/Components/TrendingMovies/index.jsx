import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import { FaFireAlt } from "react-icons/fa";
import { useMovieDetailsHook } from "../Context";
import { IoMdArrowBack } from "react-icons/io";
import MovieDetails from "../MovieDetails";


function TrendingMovies(){

    const [trend,setTrend]=useState('day');

    const [trendingMovies,setTrendingMovie]=useState([]);

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/${trend}?api_key=29bb4dc65b5553ee27a4ca58c3530a52&language=en-US`).then(res=>{
            // console.log(res.data.results);
            setTrendingMovie(res.data.results);
        })
    },[trend])
    let {movieDetails,setMovieDetails}=useMovieDetailsHook();

    return(
        <>
        {
            movieDetails.id?
            <div className="md:pt-36 pt-24">
                <IoMdArrowBack className="size-8 cursor-pointer" onClick={()=>{setMovieDetails({})}}/>
                <MovieDetails 
                id={movieDetails.id} 
                movie_name={movieDetails.original_title} 
                rating={movieDetails.vote_average}
                poster_path={movieDetails.poster_path}
                review={movieDetails.overview}
                genre={movieDetails.genres}
                url={movieDetails.homepage}
                />
            </div>
            :
        
        <div className="md:pt-36 pt-28">
            <div className="flex items-center justify-center space-x-1">
                <p className="text-center text-black py-2 md:text-xl">Trending Movies</p>
                <FaFireAlt className="md:size-6"/>
            </div>
           <div className="flex items-center justify-center md:space-x-3">
                <p onClick={()=>{setTrend('day')}} className={`cursor-pointer p-1 rounded-lg duration-700 bg-${trend=='day'?"slate-400 rounded-xl":"slate-300"}`}>Day</p>
                <p onClick={()=>{setTrend('week')}} className={`cursor-pointer p-1 rounded-lg duration-700 bg-${trend=='week'?"slate-400 rounded-xl":"slate-300"}`}>Week</p>
           </div>
           <div className="md:px-10 flex justify-around items-center flex-wrap">
                {
                    trendingMovies? trendingMovies.map(movie=>
                        <MovieCard key={movie.id} poster_path={movie.poster_path} id={movie.id} movie_name={movie.original_title}/>
                    ):<></>
                }
           </div>
            
        </div>
        }
        </>
    )
}

export default TrendingMovies;

// https://api.themoviedb.org/3/trending/movie/day?api_key=29bb4dc65b5553ee27a4ca58c3530a52&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=29bb4dc65b5553ee27a4ca58c3530a52&language=en-US