import { useLikesHook, useMovieDetailsHook } from "../Context"
import MovieCard from "../MovieCard";
import { MdWatchLater } from "react-icons/md";
import { useSearchHook } from "../Context";
import { IoMdArrowBack } from "react-icons/io";
import MovieDetails from "../MovieDetails";

function WatchLater(){
    let watchList=useLikesHook().watchLater;
    // watchList=JSON.parse(localStorage.getItem('watchLater'));
    let {search,setSearch}=useSearchHook();
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
        <div className="sm:pt-32 pt-24">
            <div className="flex items-center justify-center w-full bg-slate-800/50 py-1 sm:text-xl">
                <p >Watch Later</p>
                <MdWatchLater className="sm:size-10"/>
            </div>
            <div className="flex flex-wrap justify-around sm:px-10">
                {
                    watchList.filter(movie=>movie.movie_name.toLowerCase().includes(search.toLowerCase())).map(item=>
                        <MovieCard id={item.id} movie_name={item.movie_name} poster_path={item.poster_path}/>
                    )
                }
            </div>
        </div>
        }
        </>
    )
}
export default WatchLater;