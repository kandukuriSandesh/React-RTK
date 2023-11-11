import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const orderCake = () => {
    dispatch(ordered());
  }
  const restockcake = () =>{
    dispatch(restocked(1))
  }
  return (
    <div>
        <button onClick={orderCake} >
            Order Cake
        </button>
        <h1>No of Cakes:- {state.cake.noOfCakes}</h1>
        <button  onClick={restockcake}>
            ReStock Cake
        </button>
    </div>
  )
}
