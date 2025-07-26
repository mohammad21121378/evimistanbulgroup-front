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
 
export const viewportMargin = { once: true, margin: "0px 0px -150px 0px" }