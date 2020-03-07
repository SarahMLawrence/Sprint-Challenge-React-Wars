import React from "react";
import styled from "styled-components";

const Div = styled.div `
border: solid grey;
padding: 2%;
margin: 5%;
margin-left: 25%;
width: 50%;
display: flex;
justify-content: center;
flex-direction: column;
`

const List = styled.ul `
background-color: grey;
`

const StarCard = props => {

    return (
        <>
            <Div key={props.name}>
                <h1>{props.name}</h1>
                <List>
                 <li>Height: {props.height}</li>
                 <li>Hair Color:{props.hair_color}</li>
                 <li>Gender: {props.gender}</li>

                </List>

            </Div>

        </>
    );
};

export default StarCard;