import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addfood from './components/Addfood';
import Viewfood from './components/Viewfood';
import Searchfood from './components/Searchfood';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Addfood/>}/>
        <Route path='/view' element={<Viewfood/>}/>
        <Route path='/search' element={<Searchfood/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
