import React from 'react'
import { BoardCard } from './BoardCard'
import { getBoards } from '../../actions/index'
import { connect } from 'react-redux'

const BoardList = () =>  {
    console.log(state)
    return (
        <div>
            {state.boards.length > 0 && 
            state.boards.map((index) => {
                return (<BoardCard index={index}/>)
            })}
        
        </div>
    )
}

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    boards: state.boards
});

export default connect(
    mapStateToProps,
    { getBoards }
  )(BoardList);
  