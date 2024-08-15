import { BackgroundBeams } from '@/components/ui/background-brams'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='min-h-screen flex  flex-col items-center justify-center'>
        <h1 className='text-2xl text-cyan-100'>Hi,I am <span className='text-5xl' >Albin Sabu</span></h1>
        
        <p className='font-small'>If you read upto this i wish to start my repositry in github</p>
        <BackgroundBeams/>
    </div>
  )
}

export default page