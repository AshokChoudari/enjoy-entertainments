
import { CiSearch} from "react-icons/ci";
import { AiFillLike } from "react-icons/ai";
import { MdWatchLater } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { TbLetterE } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useClickedHook, useLikesHook } from "../Context";
import { useSearchHook } from "../Context";
import { useState } from "react";
import { useMovieDetailsHook } from "../Context";


function Header() {
    let likes=useLikesHook().likes;
    let watchLater=useLikesHook().watchLater;
    let{search,setSearch}=useSearchHook();
    // likes=JSON.parse(localStorage.getItem('likeMovies'));
    // watchLater=JSON.parse(localStorage.getItem('watchLater'));
    const [sear,setSear]=useState('');
    const {clicked,setClicked}=useClickedHook();
    let {movieDetails,setMovieDetails}=useMovieDetailsHook();

    if(sear.length==0){
        setSearch('')
    }
    return(
        <div className="bg-slate-400 sm:h-20 h-16  flex items-center sm:justify-around justify-between  fixed w-full z-50">
            <Link to='/' onClick={()=>{setClicked(''); setSearch(''); setSear(''); setMovieDetails({})}}>
                <div className="basis-1 flex items-center cursor-pointer">
                    <TbLetterE className="lg:h-14 lg:w-14 sm:h-12 sm:w-12 h-6 w-6"/>
                    <div className="md:-ml-3 -ml-1 sm:text-lg text-white text-[10px]">
                        <p className="-mb-1">njoy</p>
                        <p className="-mt-1">ntertainment</p>
                    </div>
                    <BiMoviePlay className="md:h-7 md:w-7 h-4 w-4"/>
                </div>
            </Link>
            <div className="md:basis-1/2 flex items-center">
                <input type="text" value={sear} onChange={(e)=>setSear(e.target.value)} className="basis-1/2 active:border-green-200  sm:h-8 w-[140px] h-6"></input>
                <CiSearch className="basis-1/8 sm:h-8 sm:w-8 h-6 w-6 bg-yellow-400 active:bg-yellow-500 cursor-pointer" onClick={()=>setSearch(sear)}/>
            </div>
            <div className="lg:basis-1/4 flex items-center sm:space-x-5 space-x-2 justify-end">
                <Link to='/likes'>
                    <span className="flex items-center cursor-pointer"><span className=" md:block hidden">Likes</span> <AiFillLike className="text-black sm:size-6"/>  :{likes.length}</span>
                </Link>
                <Link to='/watch-later'>
                    <span className="flex items-center cursor-pointer"> <span className=" md:block hidden">Watch Leter</span> <MdWatchLater className="text-black sm:size-6"/>  :{watchLater.length}</span>
                </Link>
            </div>
            
        </div>
    );
}

export default Header;