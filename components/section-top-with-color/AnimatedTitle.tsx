import classNames from 'classnames'
import AnimatedText from '../ui/AnimateText';

interface AnimatedTitleProps {
  title: string
  noneAnimate?: boolean;
  className?: string;
  titleSm?: boolean
}

const AnimatedTitle = ({ title, noneAnimate, className, titleSm }: AnimatedTitleProps) => {

  return (
    <div className={classNames("title-wrapper relative inline-block overflow-hidden mt-auto xl:pr-28 text-white", className)}>

      <h1
        className={classNames("font-bold  leading-[105%] mt-auto relative z-10 ",
          {
            "xl:text-[7rem] md:text-[6.6rem] sm:text-[5rem] text-[4rem]": !titleSm,
            "xl:text-[6rem] md:text-[5.7rem] sm:text-[5rem] text-[4rem]": titleSm,
          }
        )}
      >

        <AnimatedText title={title} noneAnimate={noneAnimate} />

        {/* {
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
        } */}

      </h1>

    </div>
  )
}

export default AnimatedTitle
