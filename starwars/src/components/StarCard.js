import React from "react";
import styled from "styled-components";



const Div = styled.div`
border: solid brown;
padding: 2%;
margin: 5%;
margin-left: 25%;
width: 50%;
display: flex;
justify-content: center;
flex-direction: column;
`

const Title = styled.h1`
color: Black;
letter-spacing: 5px;
text-align: center;
`

const List = styled.ul`
background-color: tan;
list-style-type: square;
list-color:green;

`


const StarCard = props => {

    return (
        <>
            <Div key={props.name}>
                <Title>{props.name}</Title>
                <List>
                    <h2>Height:  {props.height}</h2>
                    <h2>Hair color:   {props.hair_color}</h2>
                    <h2>Skin color:  {props.skin_color}</h2>
                    <h2>Eye color:  {props.eye_color}</h2>
                    <h2>Gender:   {props.gender}</h2>
                    <h2>Created:   {props.created}</h2>



                </List>

            </Div>

        </>
    );
};

export default StarCard;