import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Moviefilms from './components/moviefilms';
import Details from './components/details';
import MovieList from './components/MovieList';

function App() {
  const [movies,setMovies] = useState(MovieList)
  
  
  return (
    <Router>
      <Routes>
        <Route index element ={<Moviefilms movies ={movies} setMovies={setMovies}/>}></Route>
        <Route path ='/details/:idmovie' element={<Details movies ={movies}  />}></Route>


      </Routes>
    </Router>
     
    
  );
}

export default App;