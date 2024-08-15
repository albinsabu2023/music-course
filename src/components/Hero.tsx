import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'


function Hero() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 '>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
       <div className='p-4 relative z-10 w-full text-center'>
        <h1
        className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text
                text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400
        '
        >Master the art of music</h1>
        <div>
           
            <p className='p-10'> Music is a universal language that connects people across cultures and time. At its essence, music is the art of combining sounds to create harmony, melody, and rhythm. It has been an integral part of human life for thousands of years, serving as a form of expression, communication, and connection.

From the spiritual chants of ancient cultures to the complex symphonies of the classical era, music has evolved in countless ways. It plays a vital role in ceremonies, celebrations, and everyday life, evoking emotions and memories that words often cannot capture.



             </p>
        </div>
        
        <div className='mt-4'>
           <Link href={"#courses"}>
            
            <Button
                 borderRadius="1.75rem"
                 className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
                Courses 
            </Button>
           </Link> 
        </div>
       </div>
    </div>
  )
}

export default Hero