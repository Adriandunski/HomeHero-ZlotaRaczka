import {motion} from "framer-motion";

export default function FromSideView({isLeft ,children} : {isLeft: boolean, children: any[]}) {
    const parentVariant = {visible:{transition: { staggerChildren: 0.5}}, hidden: {}};
    const childVariant = {visible:{opacity: 1, x:0, transition: {duration: 0.4}}, hidden: {opacity: 0, x: isLeft ? -200 : 200}};

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