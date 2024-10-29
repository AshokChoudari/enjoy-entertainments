
import React, { useContext, useReducer, useState } from "react";


const likesContext=React.createContext({});
const likesDispatch=React.createContext(null);
const searchContext=React.createContext('');
const clickContext=React.createContext('');
const movieDetail=React.createContext({});


const initialValue={
    likes:[],
    watchLater:[]
};



function reducerLikes(state,action){
    const likesItem=state.likes;
    const watchItem=state.watchLater;
    

    switch(action.type){
        
        
        case 'ADD_TO_LIKES':
            const idxl=likesItem.findIndex(p=>p.id===action.likeItem.id);
            if(idxl<0){
                // localStorage.setItem('likeMovies',JSON.stringify([...state.likes,action.likeItem]))
                return {...state,likes:[...state.likes,action.likeItem]};

            }
                

            return state;
        
        case 'REMOVE_TO_LIKES':
            const idxl1=likesItem.findIndex(p=>p.id===action.likeItem.id);
            if(idxl1>=0){
                
                likesItem.splice(idxl1,1);
                // localStorage.setItem('likeMovies',JSON.stringify(likesItem))
            }

            return {...state,likes:likesItem}
        
        case 'ADD_TO_WATCH':
            const idxw=watchItem.findIndex(p=>p.id===action.watchItem.id);
            // console.log(state.watchLater);
            if(idxw<0){
                // localStorage.setItem('watchLater',JSON.stringify([...state.watchLater,action.watchItem]))
                return {...state,watchLater:[...state.watchLater,action.watchItem]};
            }
                

            return state;
        
        case 'REMOVE_TO_WATCH':
            const idxw1=watchItem.findIndex(p=>p.id===action.watchItem.id);
            // console.log(idxw1);
            
            if(idxw1>=0){
                watchItem.splice(idxw1,1);
                // localStorage.setItem('watchLater',JSON.stringify(watchItem))
            }

            return {...state,watchLater:watchItem}
        default:
            return state;
    }
}

export function ContextProvide({children}){
    const[search,setSearch]=useState('');
    const[likes,dispatch]=useReducer(reducerLikes,initialValue);
    // likes.likes=JSON.parse(localStorage.getItem('likeMovies'));
    // likes.watchLater=JSON.parse(localStorage.getItem('watchLater'));

    const[movieDetails,setMovieDetails]=useState({});
    
    const[cliked,setClicked]=useState('');
    return(
        <div>
            <likesContext.Provider value={likes}>
                <likesDispatch.Provider value={dispatch}>
                    <searchContext.Provider value={{search,setSearch}}>
                        <clickContext.Provider value={{cliked,setClicked}}>
                            <movieDetail.Provider value={{movieDetails,setMovieDetails}}>
                                {children}
                            </movieDetail.Provider>
                        </clickContext.Provider>
                    </searchContext.Provider>
                </likesDispatch.Provider>
            </likesContext.Provider>
        </div>
    )
}

export function useLikesHook(){
    return useContext(likesContext)
}
export function useDispatchHook(){
    return useContext(likesDispatch);
}
export function useSearchHook(){
    return useContext(searchContext);
}
export function useClickedHook(){
    return useContext(clickContext);
}
export function useMovieDetailsHook(){
    return useContext(movieDetail);
}