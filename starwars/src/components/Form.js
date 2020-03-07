import React, { useState } from "react";

import styled from "styled-components";

const FormDiv = styled.div`
border: solid brown;
width: 50%;
padding: 20px;
margin-left: 25%;
`
function Form() {
    const [name, setName] = useState("");

    const handleChange = event => {
        setName(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(name);
    };

    return (
        <FormDiv className="App">
            {console.log(name)}
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Favorite Star Wars Character:
          <input type="text" onChange={event => handleChange(event)} />
                </label>
                <button >Submit!</button>
                <div>


                </div>
            </form>
        </FormDiv>
    );
}

export default Form;