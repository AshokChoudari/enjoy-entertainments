
import './App.css';
import Header from './Components/Header';
import LanndingPage from './Components/Content';
import Navigation from './Components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WatchLater from './Components/WatchLater';
import LikeMovies from './Components/LikeMovies';

import TrendingMovies from './Components/TrendingMovies';
import Action from './Components/Genres/Action';
import Comedy from './Components/Genres/Comedy';
import Thriller from './Components/Genres/Thriller';
import Fiction from './Components/Genres/Fiction';
import Horror from './Components/Genres/Horror';
import Drama from './Components/Genres/Drama';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div><Header/><Navigation/><LanndingPage/></div>}/>
        <Route path='/likes' element={<div><Header/><Navigation/><LikeMovies/></div>}/>
        <Route path='/watch-later' element={<div><Header/><Navigation/><WatchLater/></div>}/>
        
        <Route path='/trending' element={<div><Header/><Navigation/><TrendingMovies/></div>}/>
        <Route path='/action' element={<div><Header/><Navigation/><Action/></div>}/>
        <Route path='/comedy' element={<div><Header/><Navigation/><Comedy/></div>}/>
        <Route path='/thriller' element={<div><Header/><Navigation/><Thriller/></div>}/>
        <Route path='/fiction' element={<div><Header/><Navigation/><Fiction/></div>}/>
        <Route path='/horror' element={<div><Header/><Navigation/><Horror/></div>}/>
        <Route path='/drama' element={<div><Header/><Navigation/><Drama/></div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
