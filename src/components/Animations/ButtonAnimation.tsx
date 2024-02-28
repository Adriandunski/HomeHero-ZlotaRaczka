import {motion} from "framer-motion";

export default function ButtonAnimation({children}: { children: any }) {
    const variants = {
        hover: {
            translateY: -10, scale: 1.05,
            transition: {
                duration: 1,
                type: 'spring'
            }
        },
        noHover: {translateY: 0, scale: 1}
    }

    return (
        <motion.div variants={variants} initial={'noHover'} whileHover={'hover'}>
            {children}
        </motion.div>
    );
}