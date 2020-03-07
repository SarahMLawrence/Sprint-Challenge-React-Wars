import React from "react";


const FilmCard= props => {

    return (
        <>
            <div key={props.films}>
                <h1>{props.films}</h1>
               

            </div>

        </>
    );
};

export default FilmCard;