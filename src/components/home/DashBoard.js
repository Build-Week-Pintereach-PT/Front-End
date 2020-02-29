import React from 'react'
import BoardList from '../board/BoardList'
import styled from 'styled-components'

const DropDowns =styled.div`
display:flex;  
flex-direction:column;
align-items:center;
`

const DashBoard = () => {

    return (
        <div>
            {/* User info via JSX goes below */}
            <h1>First Name, Last Name</h1>
            <h2>UserName</h2>
            <h3>Field of Study</h3>
            <h3>Occupation</h3>
        <DropDowns>
            <label>Options</label>
            <select name="create">
                <option value='blank'></option>
                <option value='createBoard' href='/newboard'>Create Board</option>
                <option value='createArticle'>Create Article</option>
            </select>

            <label>Edit</label>
            <select name="edit">
                <option value='blank'></option>
                <option value='renameBoard'>Rename</option>
                <option value='deleteBoard'>Delete</option>
            </select>
            <BoardList/>
        </DropDowns>
        </div>
    )


}
export default DashBoard;