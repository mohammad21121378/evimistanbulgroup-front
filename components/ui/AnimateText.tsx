'use client'

import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedTextProps {
  title: string
  noneAnimate?: boolean;
  simpleFade?: boolean;
}

const AnimatedText = ({ title, noneAnimate, simpleFade=false }: AnimatedTextProps) => {

  const isMobile = useMediaQuery({ maxWidth: 768 });

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
    hidden: simpleFade
      ? { opacity: 0 }
      : { y: -80, opacity: 0, skewY: 10 },
  
    show: simpleFade
      ? {
          opacity: 1,
          transition: { duration: 0.6, ease: 'easeOut' },
        }
      : {
          y: 0,
          opacity: 1,
          skewY: 0,
          transition: { type: 'spring', stiffness: 600, damping: 25 },
        },
  };

  const lines = title.split('\n')
  const words = title.split(' ')
  let charIndex = 0;



  return (
      <motion.span
        variants={container}
        initial="hidden"
        animate={start ? 'show' : 'hidden'}
      >

        {
          isMobile ?
            <>
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
                        className={classNames("inline-block relative ", { "fade-loop": !noneAnimate })}
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
            </>
            :
            <>
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
                              className={classNames("inline-block relative ", { "fade-loop": !noneAnimate })}
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
            </>
        }

      </motion.span>
  )
}

export default AnimatedText
