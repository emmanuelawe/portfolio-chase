
export const fadeIn = (direction) => {
    return {
    initial: {
        y: direction === 'up' ? 40 : -60,
        opacity: 0
    },

    animate: {
        y: 0,
        opacity: 1,

        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }


    }}


export const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.5
        }
    }
}