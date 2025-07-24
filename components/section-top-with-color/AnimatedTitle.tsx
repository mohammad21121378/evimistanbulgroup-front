'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedTitleProps {
  title: string
}

const AnimatedTitle = ({ title }: AnimatedTitleProps) => {
  const [start, setStart] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.06 },
    },
  }

  const letter = {
    hidden: { y: -80, opacity: 0, skewY: 10 },
    show: {
      y: 0,
      opacity: 1,
      skewY: 0,
      transition: { type: 'spring', stiffness: 600, damping: 25 },
    },
  }

  const words = title.split(' ')
  let charIndex = 0

  return (
    <div className="title-wrapper relative inline-block overflow-hidden mt-auto xl:pr-28">
      <motion.h1
        className="font-bold md:text-[7rem] text-[5rem] leading-[105%] mt-auto text-white relative z-10"
        variants={container}
        initial="hidden"
        animate={start ? 'show' : 'hidden'}
      >
        {words.map((word, wi) => (
          <span
            key={wi}
            className="inline-block whitespace-nowrap"
          >
            
            {word.split('').map((char, ci) => {
              const delay = 0.1 * charIndex++
              return (
                <motion.span
                key={ci}
                variants={letter} 
                className="inline-block relative fade-loop"
                style={{ animationDelay: `${4 + delay}s` }}
              >
                {char}
              </motion.span>
              )
            })}

            

            {wi < words.length - 1 && (
              <motion.span
                variants={letter}
                className="inline-block"
                style={{ width: '0.25em' }}
              >
                &nbsp;
              </motion.span>
            )}
          </span>
        ))}
      </motion.h1>
    </div>
  )
}

export default AnimatedTitle
