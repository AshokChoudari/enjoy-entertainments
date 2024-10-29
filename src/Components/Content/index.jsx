import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import './LangingPage.css'
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import PopularMoviesList from "../PopularMovieList";
import { useMovieDetailsHook } from "../Context";

const imageUrls=['https://png.pngtree.com/thumb_back/fh260/background/20230704/pngtree-experience-artful-cinema-from-home-enjoy-popcorn-3d-glasses-and-film-image_3726475.jpg','https://supari.in/wp-content/uploads/2020/07/FI.jpg',
    'https://img.asmedia.epimg.net/resizer/v2/I4WT6Y6NTROVRMT44WZUUK2WZY.jpg?auth=d2cb60ac0b29c21c61ee1c92e09cccc7b2664de4355c5cd0e883d3a11bb0c056&width=1472&height=828&smart=true','https://www.legendary.com/wp-content/uploads/2021/12/LEG-TV-CATALOG-400x225-1.jpg',
'https://miro.medium.com/v2/resize:fit:3840/1*jfR0trcAPT3udktrFkOebA.jpeg']



function LanndingPage(params) {
    const[index,setIndex]=useState(0);

    function nextImage() {
        if(index<imageUrls.length-1){
            setIndex(index+1);
        }
        else{
            setIndex(0);
        }
    }
    function prevImage() {
        if(index>0){
            setIndex(index-1);
        }
        else{
            setIndex(imageUrls.length-1);
        }
    }

    useEffect(()=>{
        const timer=setTimeout(()=>{
            nextImage();
        },4000)
        return()=>{
            clearTimeout(timer)
        }
    },[index]);

    let {movieDetails,setMovieDetails}=useMovieDetailsHook();

    return(
        <div>
            {
            movieDetails.id?
            <></>:
            <div className="flex items-center md:pt-36 pt-24  md:-mb-28 -mb-20" >
                <FaAnglesLeft className="size-10  cursor-pointer text-gray-400 hover:text-black" onClick={prevImage}/>
                {
                    imageUrls.map((url,idx)=>
                        <img key={idx} src={url} alt="Enter" className={'w-screen md:h-[450px] h-[180px] -mx-5 -z-10  image-masking '+ ( idx===index ? 'block':'hidden')}/>
                    )
                }
                
                <FaAnglesRight className="size-10 cursor-pointer text-gray-400 hover:text-black " onClick={nextImage}/>
            </div>
            }
            <div>
                <PopularMoviesList/>
            </div>
        </div>
    );
}
export default LanndingPage;