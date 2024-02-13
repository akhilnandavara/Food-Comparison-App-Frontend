import { Route, Routes } from 'react-router-dom';
import './scss/App.css'
import NavBar from './components/common/NavBar';
import Home from './pages/Home';


function App() {
  return (
   <div className='mx-auto col-md-11'>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
   </div>
  );
}

export default App;
