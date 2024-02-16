import { Route, Routes } from 'react-router-dom';
import './scss/App.css'
import NavBar from './components/common/NavBar';
import Home from './pages/Home';
import CuisineData from './pages/CuisineData';
import RestrurantDataPage from './pages/RestrurantData';
import OverView from './components/core/Resturant/OverView';
import MenuItem from './components/core/Resturant/MenuItem';
import Offers from './components/core/Resturant/Offers';
import Reviews from './components/core/Resturant/Reviews';


function App() {
  return (
   <div className='mx-auto col-md-11 main-container'>
    <NavBar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cuisine/:cuisineName' element={<CuisineData/>}/>
        <Route path='restrurant/:restaurantId' element={<RestrurantDataPage/>}> 
        <Route path='order-online' element={<MenuItem/>}/>
        <Route path='' element={<OverView/>}/>
        <Route path='offers' element={<Offers/>}/>
        <Route path='reviews' element={<Reviews/>}/>
        </Route>
    </Routes>
   </div>
  );
}

export default App;
