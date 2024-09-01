import React, { useState } from 'react'

export const CreateAccount = () => {
  let[rangeValue, setRangeValue] = useState(0)
  let[strengthValue, setstrengthValue] = useState('weak')

  let handlePassword = (e) => {
    console.log("handlepassword",e)
    let length = e.target.value.length
    setRangeValue(length)
    if(length == 3 ){
      setstrengthValue("Medium")
    }
    if(length == 6){
      setstrengthValue("Strong")
    }if(length <3){
      setstrengthValue("Weak")
    }
  }


  return (
    <>
    <div className='flex items-center justify-center bg-gray-500 border-2 h-screen '>
    <div className='bg-gray-400 rounded-lg shadow-lg w-full max-w-md'>
    <div className='bg-gray-500'>
      <div className='flex justify-center p-4 text-4xl'>
        <h1>Create Account</h1>
      </div>
      <div className='flex justify-start p-2 m-2 bg-transparent rounded-md'>
        <input  className='w-full  text-white rounded-md px-2' type="text" placeholder='Full name' required/>
      </div>
      <div className='flex justify-start p-2 m-2 bg-transparent rounded-md'>
        <input  className='w-full  text-white rounded-md px-2' type="text" placeholder='Email Address' required/>
      </div>
      <div className='flex justify-start p-2 m-2 bg-transparent rounded-md'>
        <input className='rounded-md px-2' onChange={(e) => {handlePassword(e)}} type="password" placeholder='Password' maxLength={6} required/>
      </div>
      <div className='m-2 p-2'>
        <input type="range" value={rangeValue} min={0} max={6} />
      </div>
      <div className='flex p-4 justify-start'>
      <p>Password strength</p> 
      <span className='px-20'>{strengthValue}</span>
      </div>
      <div className='flex justify-center bg-fuchsia-900 p-2 mx-10 my-4 rounded-md'>
        <button type='submit'>Sign Up</button>
      </div>
      <div className='flex  justify-center bg-fuchsia-500 p-2 rounded-b-lg'>
        <p>Already have an account? <a href="/">Login</a> </p>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}
