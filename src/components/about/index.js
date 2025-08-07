"use client"
import Image from "next/image"
import Typewriter from 'typewriter-effect'
import { Bio } from '../constants'
import img from "@/images/eren.jpg"
import CustomButton from "../custom-button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function About() {
    const container = {
        visible: {
            transition: {
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
        <div id="about" className='bg-[#191924] pt-20'>
            <motion.div variants={container} initial='hidden' animate='visible' className='w-full container mx-auto max-w-6xl text-white flex flex-col-reverse gap-y-4 md:gap-y-0 px-5 md:px-0 md:grid md:grid-cols-2 items-center'>
                <motion.div variants={item} className='flex flex-col gap-3 mb-16'>
                    <div className='flex flex-col text-4xl sm:text-5xl font-bold gap-4'>Hi, I am <span>Eren Çağatay</span></div>
                    <div className='flex gap-1.5 text-xl sm:text-2xl font-semibold items-center'>
                        <span>I am a</span>
                        <div className='text-[#854CE6]'>
                            <Typewriter
                                options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </div>
                    <div className='text-[#F2F3F495] text-lg sm:text-xl leading-8 box-border mb-10'>
                        {Bio.description}
                    </div>
                    <Link target="_blank" href={Bio.cvUrl}>
                        <CustomButton title='Check Resume' />
                    </Link>
                </motion.div>
                <motion.div variants={item} className="flex justify-end">
                    <Image src={img} alt="Eren Çağatay profile photo" className="md:max-w-[400px] md:max-h-[400px] max-w-[300px] max-h-[300px] w-full h-full  border-[2px] border-solid border-[#854CE6] rounded-full" priority />
                </motion.div>
            </motion.div>
        </div>
    )
}
