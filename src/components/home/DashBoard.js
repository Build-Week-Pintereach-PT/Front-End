import React from 'react'


const DashBoard = () => {

    return (
        <div>
            <label>Options</label>
            <select name="create">
                <option value='blank'></option>
                <option value='createBoard'>Create Board</option>
                <option value='createArticle'>Create Article</option>
            </select>

            <label>Edit</label>
            <select name="edit">
                <option value='blank'></option>
                <option value='renameBoard'>Rename</option>
                <option value='deleteBoard'>Delete</option>
            </select>
        </div>
    )


}
export default DashBoard;