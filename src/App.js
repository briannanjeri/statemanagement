import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter=useSelector(state=>state.counter);
  const islogged=useSelector(state=>state.islogged);
  const dispatch=useDispatch()
    return (
      <div className="App">
        <button onClick={()=>dispatch(increment(5))}>+</button>
       <h1>counter {counter}  </h1>
       <button onClick={()=>dispatch(decrement(5))}>-</button>

       <h3>
       {islogged ? <h3>user is logged in</h3> : 'you are not logged in'}
       </h3>
      </div>
    );
  }


export default App;
