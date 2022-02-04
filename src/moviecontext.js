import React , {useState, createContext} from 'react';

export const moviecontext = createContext();


export const MovieProvider = (props) => {
    const [movies,setMovies] = useState([

        {
            name:"Hary porter",
            price: "$10",
            id:23124
        },
        {
            name:"Game of thrones",
            price: "$10",
            id:2566124
        },
        {
            name:"Inception",
            price: "$10",
            id:23524
        }
    ]);
    return (
        <moviecontext.Provider value={[movies,setMovies]}>
            {props.children}
        </moviecontext.Provider>
    );
}