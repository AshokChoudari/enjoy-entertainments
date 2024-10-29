import { useState } from "react";
import { Link } from "react-router-dom";
import { useClickedHook } from "../Context";
import { useMovieDetailsHook } from "../Context";

function Navigation() {
    const genres=["Trending","Action","Comedy","Drama","Horror","Thriller","Fiction"]
    const {cliked,setClicked}=useClickedHook();

    const {movieDetails,setMovieDetails}=useMovieDetailsHook();

    
    
    return(
        <div className="fixed w-full z-50 sm:mt-20 mt-14">
            <ul className="flex bg-blue-950 text-white sm:space-x-7 sm:px-3 md:text-[18px] sx:text-lg text-[12px] overflow-scroll scroll-smooth md:overflow-hidden ">
                {genres.map(item=><Link to={'/'+item.toLocaleLowerCase()} key={item}>
                    <li className={`cursor-pointer sm:p-3 p-2 hover:bg-slate-500 active:bg-slate-700 duration-500  ${cliked==item?'bg-zinc-600':''}`}  onClick={()=>{setClicked(item); setMovieDetails({})}}>{item}</li>
                </Link>)}
            </ul>
        </div>
    );
}
export default Navigation;