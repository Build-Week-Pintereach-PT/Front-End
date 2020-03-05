import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { connect } from "react-redux";
import { addBoards } from '../../actions/index'
import { useHistory } from "react-router-dom"

const NewBoardInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function NewBoard(props) {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = function(data, e) {
    const newData = {
      ...data,
      user_id: 1
    }
    props.addBoards(newData)
    history.push('/dashboard')
    console.log("newData", newData)
    console.log(data);
    console.log(errors);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <NewBoardInputs>
        <label>Board Name</label>
        <input
          type="text"
          name="name"
          ref={register({ max: 25, min: 2, maxLength: 50 })}
        />
        <input type="submit" />
      </NewBoardInputs>
    </form>
  );
}

const mapStateToProps = state => ({
  LoggingIn: state.LoggingIn
});

export default connect(
  mapStateToProps,
  { addBoards }
)(NewBoard);