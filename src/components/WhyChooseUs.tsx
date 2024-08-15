"use client"
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal';
const content = [
  {
    title: "Introduction to Music Theory",
    description:
      "Learn the fundamentals of music theory, including scales, chords, and rhythm. This course is designed for beginners and will give you the foundation you need to understand and create music. Whether you're a musician or just starting, this course is perfect for anyone who wants to deepen their understanding of music.",
     content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
       Introduction to Music Theory
      </div>
    ),
    },
  {
    title: "Mastering Your Instrument",
    description:
      "Develop your skills on your chosen instrument with real-time feedback from experienced instructors. Whether you're playing guitar, piano, or any other instrument, our platform provides the tools and support you need to improve. Learn techniques, practice efficiently, and master your instrument with our comprehensive course.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
       Mastering Your Instrument
      </div>
    ),
    },
  {
    title: "Music Production",
    description:
      "Dive into the world of music production and learn how to create, mix, and master tracks. Our platform offers real-time updates on your projects, ensuring that you’re always working on the most recent version of your music. Collaborate with others, experiment with different sounds, and bring your musical ideas to life.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
      Music Production
      </div>
    ),
  },
   {
    title: "Live Performance Techniques",
    description:
      "Learn the art of live performance, from stage presence to sound setup. Our course will guide you through the process of preparing for and executing live shows. Gain confidence, connect with your audience, and deliver unforgettable performances with tips and techniques from seasoned performers.",
        content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
       Live Performance Techniques
      </div>
    ),
  
    },
];

function WhyChooseUs() {
  return (
    <div  >
      <StickyScroll content={content}/>
    </div>
  )
}

export default WhyChooseUs