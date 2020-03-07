import React, { useState, useEffect } from 'react';
import axios from "axios";
import StarCard from './StarCard';



export default function StarList() {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`).then(response => {
            const newChar = response.data.results;
            console.log(newChar);
            setCharacter(newChar);
        })
            .catch(error => console.log(`The error is: ${error}`));
    }, []);

    return (
        <div>
            {character.map(char => {
                return (
                    <StarCard
                        key={char.name}
                        name={char.name}
                        height={char.height}
                        hair_color={char.hair_color}
                        skin_color={char.skin_color}
                        eye_color={char.eye_color}
                        gender={char.gender}
                        created={char.created}

                    />


                );
            })}
        </div>
    );
}