import react from 'react';
import MovieList from './movielist';
import Nav from './nav';
import { MovieProvider } from './moviecontext';
import './App.css';
import AddMovie from './addmovie';

function App() {
  return (
    <MovieProvider>
    <div className="App">
      <Nav/>
      <AddMovie/>
     <MovieList/>
    </div>
    </MovieProvider>
  );
}

export default App;
