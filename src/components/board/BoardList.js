import React, {useEffect, useState} from 'react'
import { BoardCard } from './BoardCard'
import { getBoards } from '../../actions/index'
import { connect } from 'react-redux'
import { editBoards, deleteBoards } from '../../actions/index'
import { useForm } from "react-hook-form";

const BoardList = (props) =>  {
    const { register, handleSubmit, errors } = useForm();
    const [editing, setEditing] = useState(false);
    const [boardToEdit, setBoardToEdit] = useState({
        name: ''
    })

    useEffect(() => {
        props.getBoards()
    }, [])

    const editBoard = board => {

        setEditing(true);
        setBoardToEdit(board);
    }
    const saveEdit = event => {
        console.log("save edit", boardToEdit)
        props.editBoards(boardToEdit.id, boardToEdit);
    }

    const handleDelete = (event) => {
        props.deleteBoards(event.target.value)
    }
    return (
        <div>
            {props.boards.length > 0 && 
            props.boards.map((index) => {
                return ( 
                    <div className="card">
                        <div className="card-parent">
                        <h3>{index.name}</h3>
                        <button>View Articles</button>
                        <button onClick={() => editBoard(index)}>Edit</button>
                        <button value={index.id} onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                )

            })}
               {editing && (
                <div className="form-holder">
                <form onSubmit={handleSubmit(saveEdit)}>
                   <input 
                   className='form-input'
                   type='text' 
                   name='name' 
                   value={boardToEdit.name} 
                   onChange={event => setBoardToEdit({...boardToEdit, name: event.target.value })}
                   ref={register({ required: "Title Required!", minLength: {value: 3, message: "Title too short"} })}/>
   
                
                   {errors.name && <p>{errors.name.message}</p>}
                   <button type='submit'>Save</button>
                   <button onClick={() => setEditing(false)}>Cancel</button>
               </form>
               </div>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    boards: state.boards
    
});

export default connect(
    mapStateToProps,
    { getBoards, editBoards, deleteBoards }
  )(BoardList);
  