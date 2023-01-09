import MovieCard from './MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Filter from './Filter';
import Add from './Add';

const Moviefilms = ({setMovies,movies}) => {

    const AddNewMovie = (newmovie) =>{
        setMovies ([...movies,newmovie])
      }
      const [search,setSearch]=useState('')
      const [rate,setRate] = useState(0)
  return (
    <div className="App">
      <div style={{display:'flex',justifyContent:'space-around',gap:'40px',margin:'40px 0px'}}>
        <Add AddNewMovie={AddNewMovie}/>
        <Filter setSearch={setSearch} setRate={setRate}></Filter>
      </div>
      <MovieCard movies={movies.filter(movie=> movie.Title.toLocaleLowerCase().trim().includes(search) && movie.rating>= rate)} />
    </div>
  );
}

export default Moviefilms