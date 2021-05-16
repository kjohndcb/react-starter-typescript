import { useState, ChangeEvent } from 'react';
import { useAppSelector, useAppDispatch } from '@/store/hooks';

import { Root } from './Counter.styles';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '@/store/reducers/counter';

export default function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(2);

  const handleClickIncrement = () => dispatch(increment());

  const handleClickDecrement = () => dispatch(decrement());

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) =>
    setIncrementAmount(Number(e.currentTarget.value));

  const handleClickAddAmount = () =>
    dispatch(incrementByAmount(Number(incrementAmount) || 0));

  const handleClickAddAsync = () =>
    dispatch(incrementAsync(Number(incrementAmount) || 0));

  return (
    <Root>
      <h1>{count}</h1>
      <button onClick={handleClickDecrement}>-</button>
      <button onClick={handleClickIncrement}>+</button>
      <button onClick={handleClickAddAmount}>Add Amount</button>
      <button onClick={handleClickAddAsync}>Add Async</button>
      <input
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={handleChangeInput}
      />
    </Root>
  );
}
