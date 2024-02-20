import {motion} from "framer-motion";

export default function FromBottomView({children} : {children: any[]}) {
    const parentVariant = {visible:{transition: {staggerChildren: 0.3, delay: 2}}, hidden: {}};
    const childVariant = {visible:{opacity: 1, y:0}, hidden: {opacity: 0, y: 200}};

    return (
        <motion.div variants={parentVariant} initial={'hidden'} whileInView={'visible'} viewport={{once: true}}
                    className={'w-full h-full'}>
                {children.map((item, index) => {
                    return(
                        <motion.div variants={childVariant} key={index}>
                            {item}
                        </motion.div>
                    );
                })}
        </motion.div>
    );
}