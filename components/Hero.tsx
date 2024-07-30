'use client'

import React from 'react'
import sayHello from '@/utils/utils'
import { Button } from "@/components/ui/button"


function Hero() {
 
  return (
    <div className='flex items-center m-10'>
        <p className='text-4xl tracking-wide '>Share your fits with everyone</p>
        <button onClick={sayHello}>Say Hello</button>
        <Button variant="outline">Click Me!</Button>
    </div>
  )
}

export default Hero