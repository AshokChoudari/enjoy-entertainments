import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import { SiMattermost } from "react-icons/si";
import Pagination from "../Pagination";
import { useSearchHook } from "../Context";
import { getAllMovies } from "../AllMovies";
import { useMovieDetailsHook } from "../Context";
import MovieDetails from "../MovieDetails";
import { IoMdArrowBack } from "react-icons/io";


function PopularMoviesList() {
    const[moviesList,setMoviesList]=useState([]);
    const[pageNo,setPageNo]=useState(0);
    let {search,setSearch}=useSearchHook();

    function nextPage(){
        if(pageNo==19){
            setPageNo(0);
        }
        else{
            setPageNo(pageNo=>pageNo+1);
        }
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    
        
    }
    function prevPage(){
        if(pageNo!=1){
            setPageNo(pageNo=>pageNo-1);
        }
        else{
            setPageNo(19);
        }
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    
    
    
    

    // useEffect(()=>{
    //     axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=29bb4dc65b5553ee27a4ca58c3530a52&language=en-US&page=${pageNo}`).then(res=>{
    //         // console.log(res.data.results);
    //         setMoviesList(res.data.results)
    //     })
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     });
    // },[pageNo]);

    const[AllMovies,setAllMovies]=useState([]);
    
    useEffect( ()=>{
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
    // console.log(AllMovies.flat());

    
    // console.log(search);
    let {movieDetails,setMovieDetails}=useMovieDetailsHook();
    // console.log(movieDetails);
    
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
        <div>
            <div className="flex items-center justify-center md:space-x-1">
                <p className="text-center text-black md:py-2 md:text-xl">Popular Movies</p>
                <SiMattermost className="md:size-6"/>
            </div>
            <div className="md:px-10 flex justify-around items-center flex-wrap">
                {
                    search?AllMovies.flat().filter(movie=>movie.original_title.toLowerCase().includes(search.toLowerCase())).map(item=>
                        <MovieCard key={item.id} poster_path={item.poster_path} movie_name={item.original_title} id={item.id}/>
                    )
                    :
                    AllMovies[pageNo]?AllMovies[pageNo].map( movie=>
                        <MovieCard key={movie.id} poster_path={movie.poster_path} movie_name={movie.original_title} id={movie.id}/>
                    ):
                    <div role="status" className="mt-10">
                        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                }
            </div>

            {search?<></>:AllMovies[pageNo]?<Pagination pageNo={pageNo} nextPage={nextPage} prevPage={prevPage}/>:<></>}
        </div>
        }
    </>
    );   
}
export default PopularMoviesList;

// https://api.themoviedb.org/3/movie/popular?api_key=29bb4dc65b5553ee27a4ca58c3530a52&language=en-US&page=1
// https://image.tmdb.org/t/p/original+imagePath