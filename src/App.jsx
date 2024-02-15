import { Route, Routes } from 'react-router-dom';
import './scss/App.css'
import NavBar from './components/common/NavBar';
import Home from './pages/Home';
import CuisineData from './pages/CuisineData';
import RestrurantDataPage from './pages/RestrurantData';


function App() {
  return (
   <div className='mx-auto col-md-11 main-container'>
    <NavBar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cuisine/:cuisineName' element={<CuisineData/>}/>
      <Route path='restrurant/:restrurantId' element={<RestrurantDataPage/>}/>
    </Routes>
   </div>
  );
}

export default App;
