import React, { useState, useEffect } from 'react';

import axios from 'axios';


const StarList = () => {

    const [character, setCharacter] = useState([]);
    useEffect(() => {
        axios
            .get("https://swapi.co/api/people")
            .then(res => setCharacter(res.data.results));
    }, []);


    return (
        <div>
            {character.map(item => {
                return (
                    <StarCard />
                );
            })}

        </div>

    );



}

export default StarList;