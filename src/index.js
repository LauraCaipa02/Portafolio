import ReactDOM from 'react-dom/client';
import { BrowserRouter,Navigate,Route,Routes, } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import Aboutme from './pages/Aboutme';
import Jobs from './pages/Jobs';
import Studies from './pages/Studies';
import Skills from './pages/Skills';
import Error404 from './pages/Error404';
import Job from './pages/Job';
import Study from './pages/Study';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
  <Routes>

  <Route path='/' element={<Home/>}></Route>
  <Route path='/aboutme' element={<Aboutme/>}></Route>
  <Route path='/jobs' element={<Jobs/>}></Route>
  <Route path='/studies' element={<Studies/>}></Route>
  <Route path='/skills' element={<Skills/>}></Route>
  <Route path='*' element={<Error404/>}></Route>
  <Route path='/home' element={<Navigate replace to={"/"}/>}></Route>
  <Route path='/jobs/:id' element={<Job/>}></Route>
  <Route path='/studies/:id' element={<Study/>}></Route>

  </Routes>

  </BrowserRouter>
);

