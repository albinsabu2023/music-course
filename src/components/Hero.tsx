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
           
            <p className='p-10'>There are many variations of passages of Lorem Ipsum available, 
                but the majority have suffered alteration in some
                form, by injected humour, or randomised words which
                look even slightly believable. If you are going 
                to use a passage of Lorem Ipsum, you need to be sure 
                there t anything embarrassing hidden in the middleof text. All the Lorem Ipsum generators on the Internet. 
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