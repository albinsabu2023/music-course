'use client'
import React from 'react'
import  courseData from "../data/music_courses.json"
import { BackgroundGradient } from './ui/background-gradient'
import Link from 'next/link'
interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instruction:string,
    isFeatured: boolean,
}

function Courses() {
    const featuredCourses=courseData.courses.filter((course:Course) =>course.isFeatured )
  return (
    <div className='py-12 bg-gray-900 justify-center items-center flex flex-col min-h-screen' id='courses'>
        <div>
            <h2 className='text-baase text-teal-600 font-semibold tracking wide uppercase'>featured courses</h2> 
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl '>learning with best</p>
        </div>
        <div className='mt-10 justify-center align-center'>
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 '>
                {featuredCourses.map((course:Course)=>(
                    <div key={course.id} >
                         <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                            <div className='p-2 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                <p className='text-lg sm:text-xl text-black mt-4 mb-3 dark:text-neutral-200'>{course.title}</p>
                                <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow '>{course.description}</p>
                                <Link href={`/courses/${course.slug}`} className='bg-slate-800 p-2 m-3 rounded-full'>
                                LearnMore
                                </Link>
                            </div>
                         </BackgroundGradient>
                    </div>
                    ))}
            </div>
        </div>
        <div className='mt-20 text-center'>
            <Link href="/courses">
                view all courses
            </Link>
        </div>


    </div>
  )
}

export default Courses