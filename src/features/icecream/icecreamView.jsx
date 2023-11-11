import React from 'react'
import store from '../../app/store';
import { order, restock } from './icecreamSlice';
import { useDispatch,useSelector } from 'react-redux';

function IcecreamView() {
  const state = useSelector((state) => state )
   
const dispatch = useDispatch();

  const orderIcecream = () => {
    dispatch(order())
    console.log(state)
  }

  const restockIcecream = () => {
    dispatch(restock(1))
  }
  return (
    <div>
        <button onClick={orderIcecream} >Order Icecream</button>
        
        <h1> No of Icecream :- {state.icecream.noOfIcecreams}</h1>
        <button onClick={restockIcecream} >Restock Icecream</button>
    </div>
  )
}

export default IcecreamView;