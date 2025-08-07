"use client"
import { Bio, SkillSet } from "../constants"
import { motion } from "framer-motion"

export default function Skills() {

    const container = {
        visible: {
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: {
            opacity: 0,
            translateY: 20
        },
        visible: {
            opacity: 1,
            translateY: 0,
        }
    }

    return (
        <div id="skills" className="bg-[#1C1C27] pt-16">
            <div className='w-full container mx-auto max-w-6xl'>
                <motion.div variants={container} initial='hidden' animate='visible' className="flex flex-col items-center justify-center gap-6">
                    <motion.div variants={item} className="text-white text-4xl font-medium">Skills</motion.div>
                    <motion.div variants={item} className="text-[#b1b2b3] text-center max-w-[600px] text-sm sm:text-lg">{Bio.descriptionSkills}</motion.div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 mb-10">
                        {SkillSet.map((item, index) => (
                            <div className="bg-[#171721] border border-solid border-[#7846CF] rounded-xl mt-5 sm:max-w-[375px]" key={index}>
                                <div className="flex flex-col p-4 px-6 sm:px-10 gap-y-6 text-white items-center">
                                    <div className="text-2xl font-semibold text-[#b1b2b3]" > {item.title}</div>
                                    <div className="grid grid-cols-2 gap-5 ">
                                        {item.skills.map((element, index2) => (
                                            <div className="flex gap-2 items-center justify-center border border-[#5B5C63] rounded-lg p-3" key={index2}>
                                                <img src={element.image} alt={`${element.name} logo`} width={20} height={20} />
                                                <div className="text-sm">{element.name}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div >
            </div >
        </div >
    )
}
