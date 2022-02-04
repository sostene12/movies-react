 import react,{useState,useContext} from 'react';
 import { moviecontext } from './moviecontext';
 import './App.css';
 const AddMovie = () =>{
    const [movies,setMovies] = useContext(moviecontext);
     const [name,setName] = useState('');
     const [price,setPrice] = useState('');

     const updateName = e =>{
         setName(e.target.value);
     }

     const updatePrice = e =>{
        setPrice(e.target.value);
    }

    const movieAdd = e =>{
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies,{name:name,price:price}]);
    }

     return(
         <div>
             <form onSubmit={movieAdd} className="form">
                 <input type="text" placeholder='Name of The movie' name='name' value={name} onChange={updateName}/>
                 <input type="text" placeholder='Price' name='price' value={price} onChange={updatePrice}/>
                 <button>Submit</button>
             </form>
         </div>
     );
 }
 export default AddMovie;