import React from "react";
import styled from "styled-components";

import OIP from "OIP.jpg";


const Div = styled.div`
border: solid grey;
padding: 2%;
margin: 5%;
margin-left: 25%;
width: 50%;
display: flex;
justify-content: center;
flex-direction: column;
`

const Title = styled.h1 `
color: green;
letter-spacing: 5px;
`

const List = styled.ul`
background-color: grey;
list-style-image: url('OIP.jpg');
`


const StarCard = props => {

    return (
        <>
            <Div key={props.name}>
                <Title>{props.name}</Title>
                <List>
                    <li>Height:   {props.height}</li>
                    <li>Hair color:  {props.hair_color}</li>
                    <li>Skin color:  {props.skin_color}</li>
                    <li>Eye color:  {props.eye_color}</li>
                    <li>Gender:   {props.gender}</li>
                    <li>Created:   {props.created}</li>



                </List>

            </Div>

        </>
    );
};

export default StarCard;