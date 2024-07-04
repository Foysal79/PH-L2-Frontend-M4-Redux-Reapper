// UserInfoWithUseReducer.tsx
import React, { useReducer } from 'react';

type TAction = {
  type : string;
  payload : string;
}

const UserInfoWithUseReducer = () => {
  const initialState = {
    name : '',
    age : '',
    hobbies : [] as string[] ,
  }
  const reducer = (currentState : typeof initialState , action :TAction ) => {
    switch(action.type)
    {
    case 'addName':
    return {...currentState, name : action.payload}
    case 'addAge':
    return {...currentState, age : action.payload};
    case 'addHobbies' : 
    return {...currentState, hobbies : [...currentState.hobbies, action.payload]}
    default :
     return currentState;
    }
    

  }

   const [state, dispatch] = useReducer(reducer, initialState);
   console.log(state);
  return (
    <form>

      <input
      onChange={(e) => 
        dispatch({type : "addName", payload : e.target.value}
        )}
       className='p-1 border-4 m-2' type="text" name='name' id='name' placeholder='name' />


      <input
       onChange={(e) => 
        dispatch({type : "addAge", payload : e.target.value}
        )}
       className='p-1 border-4 m-2' type="number" name='age' id='age' placeholder='age' />


      <input
      onBlur={(e) => dispatch({type : "addHobbies", payload : e.target.value})}
       className='p-1 border-4 m-2' type="text" name='hobbies' id='hobbies' placeholder='hobbies'/>
      {/* submit button */}

       <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-2' type='submit' >Submit</button>
      
    </form>
      
  );
};

export default UserInfoWithUseReducer;
