import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


function Pagination({pageNo,nextPage,prevPage}) {
    
    return(
        <div className="flex items-center justify-center md:space-x-5">
            <span className="flex items-center cursor-pointer md:text-xl" onClick={prevPage}><FaChevronLeft/>Previous</span>
            <p className="text-lg flex space-x-3 items-center justify-center">
                <span>{pageNo==0?' ':pageNo}</span>
                    <span className="md:text-2xl text-xl">{pageNo+1}</span>
                    <span>{pageNo===19?' ':pageNo+2 +" ... "}</span>
                </p>
            <span className="flex items-center cursor-pointer md:text-xl" onClick={nextPage}>Next<FaChevronRight/></span>
        </div>
    )
}

export default Pagination;