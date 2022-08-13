import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';
import States from './Components/States';

const initialState = [
  {
    id: 1,
    count: 0
  },
  {
    id: 2,
    count: 0
  }
]

function App() {
  const [state, setState] = useState(initialState)

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  }

  const increment = (id) => {
    const updateCounter = state.map(item => {
      if(item.id===id){
        return {
          ...item,
          count: item.count + 1
        }
      }
      else return {...item}
    })

    setState(updateCounter);
  }

  const decrement = (id) => {
    const updateCounter = state.map(item => {
      if(item.id===id){
        return {
          ...item,
          count: item.count - 1
        }
      }
      else return {...item}
    })

    setState(updateCounter);
  }

  return (
    <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            <div class="max-w-md mx-auto mt-10 space-y-5">
              {
                state.map((count) => <Counter key={count.id} count={count.count} id={count.id} increment={increment} decrement={decrement} />)
              }

              <States count={totalCount()} />
            </div>
        </div>
  );
}

export default App;
