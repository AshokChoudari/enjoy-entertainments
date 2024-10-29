import MovieCard from "../MovieCard";
import { useLikesHook, useMovieDetailsHook } from "../Context";
import { AiFillLike } from "react-icons/ai";
import { useSearchHook } from "../Context";
import MovieDetails from "../MovieDetails";
import { IoMdArrowBack } from "react-icons/io";

function LikeMovies(){
    let likeList=useLikesHook().likes;
    // likeList=JSON.parse(localStorage.getItem('likeMovies'));
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
        <div className="sm:pt-32 pt-24" >
            <div className="flex items-center justify-center w-full bg-slate-800/50 py-1 sm:text-xl">
                <p >Watch Later</p>
                <AiFillLike className="sm:size-10"/>
            </div>
            <div className="flex flex-wrap justify-around sm:px-10">
                {
                    likeList.filter(movie=>movie.movie_name.toLowerCase().includes(search.toLowerCase())).map(item=>
                        <MovieCard id={item.id} movie_name={item.movie_name} poster_path={item.poster_path}/>
                    )
                }
            </div>
        </div>
        }
        </>
    )
}
export default LikeMovies;