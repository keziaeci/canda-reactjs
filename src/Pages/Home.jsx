import React from 'react'
import {Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='flex justify-center items-center min-h-screen flex-col'>

        <h1 className='text-5xl  font-bold'>Hari mu buruk?</h1>
        <h1 className='text-xl  font-light'>sini tak bikin ngakak dikit</h1>
        <div className='flex justify-between w-80 mt-10'>
            <Link to={'/text'}>
                <Button size="sm">
                    Meme tulisan
                </Button>
            </Link>
            <Link to={'/image'}>
                <Button size="sm">
                    Meme gambar
                </Button>
            </Link>
        </div>  
    </div>
  )
}
