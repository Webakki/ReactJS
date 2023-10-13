import React, { useState } from 'react'




const TodoList = () => {
    const [ num, setNam] = useState(0)

    const incNum = ()=> {
        setNam(num+1)
    }

    const decNum = () => {
        if(num>0){
        setNam(num-1)
        }else{
            setNam(0)
            alert("Sorry, Zero limit reach!")
        }
    }
  return(

  <>
  <div className='main_div'>
    <div className='center_div'>

      <h1>{num}</h1>
      <div className='btn_div'>
        <button onClick={incNum}>  Increment </button>
        <button onClick={decNum}>  Decrement </button>
      </div>
    </div>
  </div>
  </>
  )
}



export default TodoList;
