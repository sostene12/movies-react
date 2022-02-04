import React , {useState,useContext} from 'react';
import Movie from './movie';
import { moviecontext } from './moviecontext';
const MovieList = () => {

    const [movies,setMovies ] = useContext(moviecontext);

    return (
        <div>
            {/* <h1>{value}</h1> */}
            {movies.map(movie =>(
                <Movie name={movie.name} price={movie.price} key={movie.id}/>
            ))}
        </div>
    );
}

export default MovieList;