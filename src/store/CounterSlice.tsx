import { createSlice } from "@reduxjs/toolkit";
const CounterSlice=createSlice({
name:"Counter",
initialState:{counterValue:0},
reducers:{
increaseValue:(state)=>{
    console.log("valuue")
    
    state.counterValue++

},
decreaseValue:(state)=>{
    state.counterValue--
}


}
})
export default CounterSlice.reducer
export const CounterAction=CounterSlice.actions