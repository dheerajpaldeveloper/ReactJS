import React, { useState } from 'react'


export const WelcomePage = () => {

  return (
    <>
    <div className='flex items-center justify-center bg-gray-500 border-2 h-screen '>
    <div className='bg-gray-400 rounded-lg shadow-lg w-full max-w-md'>
      <div className='flex justify-center p-4 text-4xl'>
        <h1 >Welcome Back</h1>
      </div>
      <div className='flex justify-start p-2 m-2 bg-transparent rounded-md'>
        <input className='w-full  text-white rounded-md px-2' type="text" placeholder='Email address' required/>
      </div>
      <div className='flex justify-start p-2 m-2 bg-transparent rounded-md'>
        <input className='w-full text-white rounded-md px-2' type="password" placeholder='password' required/>
      </div>
      <div className='flex justify-start p-4'>
       <label><input type="checkbox" /> Remember me</label> 
        <a className='px-14' href="#">Forget password?</a>
      </div>
      <div className='flex justify-center bg-fuchsia-900 p-2 mx-10 my-4 rounded-md'>
      <button type='submit'>Login</button>
      </div>
      <div className='flex  justify-center bg-fuchsia-500 p-2 rounded-b-lg'>
        <p>Don't have account? <a href="/createAccount">Sign up</a> </p>
      </div>
    </div>
    </div>
    </>
  )
}
