import React from 'react';
import { useSelector } from "react-redux";
import type {RootState} from "../store"
import {CounterAction} from "../store/CounterSlice"
import { useAppDispatch } from "../store";
import {NavLink} from "react-router-dom";

const Screen1 = () => {
    
    const dispatch=useAppDispatch()
  const counterValue=useSelector((state:RootState)=>state.counter.counterValue)
  
  const handleIncrement=()=>{
    console.log("yes")
    dispatch(CounterAction.increaseValue())
  }
  const handleDecrement=()=>{
    dispatch(CounterAction.decreaseValue())
  }
  
    return (
        <div>
            <NavLink
                to="/screen2">screen2</NavLink>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            <h1>Screen1</h1><br/>
            <h3>{counterValue}</h3>
            <button onClick={handleIncrement}>Increase Counter</button>
            <button onClick={handleDecrement}>Decrease Counter</button>
            
        </div>
    );
};

export default Screen1;