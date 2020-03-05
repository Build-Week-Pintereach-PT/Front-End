import React from 'react';
import styled from 'styled-components'

const DropDowns =styled.div`
display:flex;  
flex-direction:column;
align-items:center;
`

export const BoardCard = (props) => {
    console.log(props)
    return (
        <div>
            
                <h3>{props.index.name}</h3>
                <button>Edit</button>
                
                <button>Delete</button>
    
        </div>
    )
}