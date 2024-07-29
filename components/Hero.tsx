'use client'

import React from 'react'
import sayHello from '@/utils/utils'


function Hero() {
 
  return (
    <div className='flex items-center m-10'>
        <p className='text-4xl tracking-wide '>Share your fits with everyone</p>
        <button onClick={sayHello}>Say Hello</button>
    </div>
  )
}

export default Hero