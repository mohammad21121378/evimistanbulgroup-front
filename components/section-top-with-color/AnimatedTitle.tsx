'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedTitleProps {
  title: string
  noneAnimate?: boolean;
  className?: string;
  titleSm?: boolean
}

const AnimatedTitle = ({ title, noneAnimate, className, titleSm }: AnimatedTitleProps) => {
  const [start, setStart] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), 2000)
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

  const lines = title.split('\n')
  const words = title.split(' ')
  let charIndex = 0

  return (
    <div className={classNames("title-wrapper relative inline-block overflow-hidden mt-auto xl:pr-28", className)}>

      <motion.h1
        className={classNames("font-bold  leading-[105%] mt-auto text-white relative z-10 md:hidden",
        {
          "xl:text-[7rem] md:text-[6.6rem] sm:text-[5rem] text-[4rem]": !titleSm,
          "xl:text-[6rem] md:text-[5.7rem] sm:text-[5rem] text-[4rem]": titleSm,
        }
        )}
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
                className={classNames("inline-block relative ", { "fade-loop":  !noneAnimate})}
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

      <motion.h1
        className={classNames("font-bold  leading-[105%] mt-auto text-white relative z-10 hidden md:block",
        {
          "xl:text-[7rem] md:text-[6.6rem] sm:text-[5rem] text-[4rem]": !titleSm,
          "xl:text-[6rem] md:text-[5.7rem] sm:text-[5rem] text-[4rem]": titleSm,
        }
        )}
        variants={container}
        initial="hidden"
        animate={start ? 'show' : 'hidden'}
      >        
        {lines.map((line, li) => {
          const words = line.split(' ')
          return (
            <div key={li} className="block">
              {words.map((word, wi) => (
                <span key={wi} className="inline-block whitespace-nowrap md:pb-2.5">
                  {word.split('').map((char, ci) => {
                    const delay = 0.1 * charIndex++
                    return (
                      <motion.span
                        key={ci}
                        variants={letter}
                        className={classNames("inline-block relative ", { "fade-loop":  !noneAnimate})}
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
            </div>
          )
        })}
      </motion.h1>
    </div>
  )
}

export default AnimatedTitle
