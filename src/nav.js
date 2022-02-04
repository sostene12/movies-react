import React,{createContext, useContext}  from 'react';
import { moviecontext } from './moviecontext';

const Nav = () => {
    const [movies,setMovies]= useContext(moviecontext);
    return (
        <div className='nav'>
          <h3>Ng Sostene</h3>
          <p>List of Movies : {movies.length}</p>
        </div>
    );
}

export default Nav;