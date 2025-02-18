import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '../components/Counter'
import { decrease, increase } from '../modules/counter';

const CounterContainers = () => {
  const number = useSelector(state=>state.counter)
  const dispatch = useDispatch();
  const onIncrease = () => {
    dispatch(increase);
  }
  const onDecrease = () => {
    dispatch(decrease);
  }
  return (
    <div>
      <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
    </div>
  )
}

export default CounterContainers