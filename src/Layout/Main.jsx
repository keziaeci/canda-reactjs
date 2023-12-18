import React from 'react'
import Footer from '../Components/Footer'

export const Main = ({children}) => {
  return (
    <>
        <div className='flex justify-center items-center min-h-screen flex-col'>
            <div>{children}</div>
            <Footer />
        </div>
    </>
  )
}
