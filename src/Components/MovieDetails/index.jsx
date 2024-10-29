
import { FaPlay } from "react-icons/fa";
function MovieDetails({id,movie_name,poster_path,rating,review,genre,url}) {
    return(
        <div className="flex flex-col md:flex-row items-center md:justify-around " >
            <div className=" md:h-[400px] h-[300px] md:w-[300px] w-[200px] bg-center bg-cover  flex items-center justify-center hover:scale-110 duration-150 mb-6" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>

                <a href={url} target="/"><FaPlay className="text-white md:text-xl duration-200 cursor-pointer hover:text-2xl"/></a>
                
            </div>
            
            <div className="basis-1/2 flex flex-col px-2">
                <p className="md:text-2xl bg-blue-500/60 md:p-5 p-1 w-full items-center rounded-lg text-center md:mb-5">{movie_name}</p>
                <p className="md:text-xl py-2 text-center">{review}</p>
                <p className="md:space-x-1 space-x-1 md:text-lg"> Genres : {genre.map(item=><span className="md:p-1 md:bg-gray-400 rounded-md">{item.name}</span>)}</p>
                <p className="md:text-xl">Rating : {rating}</p>
            </div>
        </div>
    );
}

export default MovieDetails;