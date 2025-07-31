export const slideUpAnimation = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        rotateX: -10,
        y: 30,
    },
    show: {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 60,
            damping: 14,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const viewportMarginSm = { once: true, margin: "0px 0px -75px 0px" }
export const viewportMargin = { once: true, margin: "0px 0px -150px 0px" }


export const slideUpAndFadeinAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3,
            duration: 1,
            ease: [0.65, 0, 0.35, 1],
        },
    },
};

export const fadeinAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            ease: [0.65, 0, 0.35, 1],
        },
    },
};

export const fadeinAnimationWithDelay = (delay: number) => {
    return{
    hidden: { opacity: 0, scale: .9 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: delay,
            duration: .5,
        },
    },}
};