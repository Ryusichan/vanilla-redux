import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

function ToDo({ text, onBtnClick, id}) {
    return (
        <li>
            <Link to={`/${id}`}>
            {text} <button onClick={onBtnClick}>DEL</button>
            </Link>
        </li>
    )
}

function mapDispatchToProps(dispatch, ownProps){
    // 2번째 인자값 소유한 props조사하기
    console.log(ownProps);
    return{
        onBtnClick: () => dispatch(actionCreators.deleteTodo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(ToDo);