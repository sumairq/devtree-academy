'use client'
import React from 'react';
import './Hero.css';
import EmailBox from '../EmailBox/EmailBox';
import { HeroData } from '@/src/utils/data';
import { delay, motion } from 'framer-motion';

const Hero = () => {
     const variants = (delay) => ({
        initial : {
           y: "18rem"
        },
        animate: {
           y: "0rem",
           transition: {
            type: "spring",
            damping: 25,
            duration: 2.5,
            delay: delay
           }
        }
     })

  return (
    <div className='h-wrapper'>
        <div className='container'>

            {/* <img src='hero/hero-bg.png' alt='uparrow' className='h-arrow'/> */}

            <div className='h-container'>
                {/* Left Section */}
                <div className='h-left'>
                    <div className='image-row'>
                        {
                            HeroData.slice(0, 3).map((person, i) => (
                                <div className='person-pill' key={i}>
                                     <motion.div
                                     initial={"initial"}
                                     animate={"animate"}
                                     variants={variants(person.delay)}
                                     style={{backgroundColor: person.bg}}
                                     className='person-pill-bg'>
                                        <img
                                         src={person.src}
                                         alt={person.src}/>
                                     </motion.div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='image-row'>
                    {
                            HeroData.slice(3, 6).map((person, i) => (
                                <div className='person-pill' key={i}>
                                     <motion.div
                                     initial={"initial"}
                                     animate={"animate"}
                                     variants={variants(person.delay)}
                                     style={{backgroundColor: person.bg}}
                                     className='person-pill-bg'>
                                        <img
                                         src={person.src}
                                         alt={person.src}/>
                                     </motion.div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Right Section */}
                <div className='h-right'>
                    <div className='h-title'>
                        <span>Land a high paying job from anywhere.</span>
                    </div>

                    <div className='h-des'>
                        Empower Your Software development Journey: Elevate Skills, Forge Success learning alongside an international community of students.
                    </div>

                    <EmailBox/>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Hero