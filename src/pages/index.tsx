import { useState } from 'react';

import {
  useAppDispatch,
  useAppSelector,
} from '../store/hooks';

import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '../components/counter/counterSlice';

const IndexPage:React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <>
      <h1>Welcome to the greatest app in the world!</h1>
      <h2>
        The current number is
        {count}
      </h2>
      <div>
        <input
          value={incrementAmount}
          onChange={(e)=>setIncrementAmount(Number(e.target.value))}
          type="number"
        />
        <button className="btn bg-red-400 border border-neutral-600"
          onClick={()=>dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </button>
      </div>
      <div>
        <button className="btn bg-red-400 border border-neutral-600" onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button className="btn bg-red-400 border border-neutral-600" onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
    </>
  );
};

export default IndexPage;