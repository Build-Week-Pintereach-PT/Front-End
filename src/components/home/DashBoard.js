import React from 'react'
import BoardList from '../board/BoardList'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { getBoards } from '../../actions/index'
import { connect } from "react-redux"

const DropDowns =styled.div`
display:flex;  
flex-direction:column;
align-items:center;
`

const DashBoard = (props) => {
const history = useHistory();
const handleChange = (event)=>{
    history.push(event.target.value)
}
    return (
        <div>
          <h2>Hi, {props.username}</h2>

        <DropDowns>
            <label>Create</label>
            <select onChange={handleChange} name="create">
                <option value='blank'></option>
                <option  value='/newboard'>Create Board</option>
                <option value='/newarticle'>Create Article</option>
            </select>
            <BoardList/>
        </DropDowns>
        </div>
    )


}

const mapStateToProps = state => ({
    isFetching: state.isFetching
})

export default connect(
    mapStateToProps,
    { getBoards }
)(DashBoard);