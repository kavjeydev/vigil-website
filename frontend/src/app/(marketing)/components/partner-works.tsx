import { motion } from "framer-motion"

export const Work = () => {
    return (
        <div className=" flex grayscale hover:grayscale-0 transition-all duration-150 bg-black
        items-center justify-center">
            <div className="flex w-[55rem] h-[37rem] overflow-hidden items-center justify-center">
                <motion.div
                // className="h-56 w-96 bg-slate-200"
                className="w-[55rem] h-[37rem] bg-contain bg-center bg-no-repeat cursor-pointer flex items-center justify-center"
                whileHover={{scale: 1.2}}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ backgroundImage: `url('tecca.jpg')` }}
                >
                    <img src="helen.png"/>

                </motion.div>
            </div>
        </div>
    )
}