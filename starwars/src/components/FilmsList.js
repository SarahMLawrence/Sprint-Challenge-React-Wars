import React, { useState, useEffect } from 'react';
import axios from "axios";



export default function FilmsList(){
    const [film, setFilm] = useState([]);

    useEffect(() =>{
        axios.get(`https://swapi.co/api/films`).then(res => {
            const newFilm = res.data.results;
            console.log(newFilm);
            setFilm(newFilm);
        })
        .catch(err => console.log(`The error is: ${err}`));
    }, []);

    return (
        <div>
            {film.map(film => {
                return (
                    <FilmCard 
                    key={char.films}
                    films={char.films}
                   
                    />
                );
            })}
        </div>
    );
}