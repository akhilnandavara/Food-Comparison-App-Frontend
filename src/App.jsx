import { Route, Routes } from 'react-router-dom';
import './scss/App.css'
import NavBar from './components/common/NavBar';
import Home from './pages/Home';
import CuisineData from './pages/CuisineData';


function App() {
  return (
   <div className='mx-auto col-md-11'>
    <NavBar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cuisine/:cuisineName' element={<CuisineData/>}/>
    </Routes>
   </div>
  );
}

export default App;
