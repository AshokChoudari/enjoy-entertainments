import { useEffect, useState } from "react";
import { getAllMovies } from "../AllMovies";
import MovieCard from "../MovieCard";
import MovieDetails from "../MovieDetails";
import { IoMdArrowBack } from "react-icons/io";
import { useMovieDetailsHook, useSearchHook } from "../Context";


function Thriller(){
    const[AllMovies,setAllMovies]=useState([]);
    let {search,setSearch}=useSearchHook();
    
    useEffect(()=>{
        // const getMovei=async ()=>{
        //     try {
        //         get
        //     } catch (error) {
                
        //     }
        // }
        const ok=async ()=> {
        const arr=await getAllMovies();
        // console.log(arr.flat());
        setAllMovies(arr);
        }
        ok();
        

    },[])
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
        <div className="pt-32 flex flex-wrap justify-around">
            {
                search?AllMovies.flat().filter(movie=>movie.original_title.toLowerCase().includes(search.toLowerCase()) && movie.genre_ids.includes(53)).map(item=>
                    <MovieCard key={item.id} poster_path={item.poster_path} movie_name={item.original_title} id={item.id}/>
                )
                :
                AllMovies.flat().map(movie=>
                 movie.genre_ids.includes(53)&&<MovieCard id={movie.id} movie_name={movie.original_title} poster_path={movie.poster_path}/>
                )
            }
        </div>
        }
        </>
    )
}
export default Thriller;