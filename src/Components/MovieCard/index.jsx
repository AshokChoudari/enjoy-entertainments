import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { useDispatchHook } from "../Context";
import { AiFillLike } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";

import { useState } from "react";
import { useLikesHook } from "../Context";
import { fetchMovieDetails } from "../GetMovieDetails";
import { useMovieDetailsHook } from "../Context";
import { CgMoreO } from "react-icons/cg";




function MovieCard({id,poster_path,movie_name}) {
    let likeItem=useLikesHook().likes;
    let watchItem=useLikesHook().watchLater;
    // likeItem=JSON.parse(localStorage.getItem('likeMovies'))
    // watchItem=JSON.parse(localStorage.getItem('watchLater'));
    const dispatch=useDispatchHook();

    const idxl=likeItem.findIndex(p=>p.id===id);
    const idxw=watchItem.findIndex(p=>p.id===id);
    let {movieDetails,setMovieDetails}=useMovieDetailsHook();

    function likeCliked(){
        setMovieDetails({});
        return dispatch({type:'ADD_TO_LIKES',likeItem:{id:id,movie_name:movie_name,poster_path:poster_path}});
    }
    function unlikedClicked(){
        setMovieDetails({});
        return dispatch({type:'REMOVE_TO_LIKES',likeItem:{id,movie_name,poster_path}});
    }
    function watchClicked(){
        setMovieDetails({});
        return dispatch({type:'ADD_TO_WATCH',watchItem:{id,movie_name,poster_path}});
    }
    function unwatchClicked(){
        setMovieDetails({});
        return dispatch({type:'REMOVE_TO_WATCH',watchItem:{id,movie_name,poster_path}});
    }

    

    function openMovie() {
        console.log(id);
        fetchMovieDetails(id).then(movie=>{
            setMovieDetails(movie);
            // console.log(movieDetails);
            
        }
        
        )
        // console.log(movieDetails);
    }
    
    return(
        
            <div className="sm:m-3 md:m-4 m-1 md:h-[40vh] h-[30vh] md:w-[200px] w-[120px] bg-center bg-cover rounded-xl hover:cursor-pointer md:hover:scale-110 hover:scale-105 duration-200 flex flex-col justify-between" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}} >
                <div className="flex items-start justify-end md:m-2 m-1">
                {(idxl<0)? <AiOutlineLike className="text-blue-500 md:size-5  hover:scale-110 duration-100" onClick={likeCliked} />
                    : <AiFillLike className="text-blue-500 md:size-5 hover:scale-110 duration-100" onClick={unlikedClicked}/>
                    }
                    {(idxw<0)? <MdOutlineWatchLater className="text-blue-600 md:size-5 md:hover:scale-110 duration-100" onClick={watchClicked}/>
                    :<MdWatchLater className="text-blue-600 md:size-5 hover:scale-110 duration-100" onClick={unwatchClicked}/>
                    }
                </div>
                <div className="flex items-center justify-center">
                    <CgMoreO className="text-yellow-100 md:size-7 hover:size-8 hover:text-white duration-150" onClick={openMovie}/>
                </div>
                <div className="bg-slate-400/60 w-full" onClick={openMovie}>
                    <p className="text-white text-center md:text-xl w-full">{movie_name}</p>
                </div>
            </div>
    )
}

export default MovieCard;