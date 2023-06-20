import React from 'react';
import { useSelector} from "react-redux";
import type {RootState} from "../store"
import {CounterAction} from "../store/CounterSlice"
import {NavLink} from "react-router-dom";
import { useAppDispatch } from "../store";

const Screen2 = () => {
    const dispatch=useAppDispatch()
  const counterValue=useSelector((state:RootState)=>state.counter.counterValue)
  console.log("adta",counterValue)
  
  const handleIncrement=()=>{
    
    dispatch(CounterAction.increaseValue())
  }
  const handleDecrement=()=>{
    dispatch(CounterAction.decreaseValue())
  }
  
    return (
        <div>
            <NavLink
                to="/screen1">screen1</NavLink>
                <br/>
                <br/>
                <br/>
                <br/>
            <h1>Screen2</h1>
            <h3>{counterValue}</h3>
            <button onClick={handleIncrement}>Increase Counter</button>
            <button onClick={handleDecrement}>Decrease Counter</button>
        </div>
    );
};

export default Screen2;