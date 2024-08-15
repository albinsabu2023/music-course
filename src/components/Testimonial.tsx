import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Music can change the world because it can change people.",
    name: "Bono",
    title: "Lead Vocalist, U2",
  },
  {
    quote:
      "Without music, life would be a mistake.",
    name: "Friedrich Nietzsche",
    title: "Philosopher",
  },
  {
    quote:
      "One good thing about music, when it hits you, you feel no pain.",
    name: "Bob Marley",
    title: "Reggae Legend",
  },
  {
    quote:
      "Music is the divine way to tell beautiful, poetic things to the heart.",
    name: "Pablo Casals",
    title: "Cellist, Conductor, and Composer",
  },
  {
    quote:
      "I would rather write 10,000 notes than a single letter of the alphabet.",
    name: "Ludwig van Beethoven",
    title: "Composer and Pianist",
  },
];

function Testimonial() {
  return (
    <div className='flex flex-col items-center justify-center h-[40rem]dark:bg-black   dark:bg-grid-white/[0.2] bg-grid-black/[0.2]
        relative overflow-hidden min-h-screen
    '  id='testimony'>
        <h1 className='lg:text-4xl font-bold md:text-3xl'>Hear Our Harmony:Voice of success</h1>
        <div className='flex justify-center w-full overflow-hidden px-4 sm:px-2 lg:px-8 '>
            <div className=' w-full max-w-6xl '>
                <InfiniteMovingCards
                    items={testimonials}
                    direction='left'
                    speed='slow'
                />

                
            </div>
           
        </div>
        
    </div>
  )
}

export default Testimonial