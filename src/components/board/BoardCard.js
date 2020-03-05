import React from 'react';
import styled from 'styled-components'

const DropDowns =styled.div`
display:flex;  
flex-direction:column;
align-items:center;
`

export const BoardCard = () => {
    return (
        <div>
            <DropDowns>
            <label>Edit</label>
            <select name="edit">
                <option value='blank'></option>
                <option value='renameBoard'>Rename</option>
                <option value='deleteBoard'>Delete</option>
            </select>
        </DropDowns>
        </div>
    )
}