import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

const About = () => {
    return (
        <section name="About" 
        className='relative w-full md:h-screen text-white h-unset'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg'>

                    <div className='pb-8'>
                        <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40'>About me</h2>
                    </div>

                    <p className="mb-4 py-6">I'm Abdul Wassay, a Frontend Web Developer and Software Engineering graduate from Sir Syed University, Karachi. I build responsive, modern web applications using technologies like React, Node.js, and Tailwind CSS. With a passion for clean design and functional interfaces, I turn ideas into engaging digital experiences.
                    </p>

                    <p>Thanks to my creativity, my attention to detail and my determination, I realized that I have a great talent for developing web applications. I am fascinated by this great world of technologies and possibilities, and I am sure that I will be able to create incredible projects both professionally and personally with you.</p>

                    <Link to='/about-me' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                        See more
                        <span className=''><MdOutlineKeyboardArrowRight size={25} className='ml-1' /></span>
                    </Link>
                
            </div>

            <ScrollLink to="Projects" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>
            
        </section>
        
    )
}

export default About
