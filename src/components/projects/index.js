"use client"
import { Bio, ProjectsSet } from "../constants"
import Image from "next/image";
import CustomButton from "../custom-button";
import { Tooltip } from "@nextui-org/react";
import Link from "next/link";

export default function Projects() {

    return (
        <div id="projects" className="bg-[#1C1C27] pt-16 pb-10">
            <div className='w-full container mx-auto max-w-6xl text-white'>
                <div className="flex flex-col items-center justify-center gap-6">
                    <div className="text-white text-4xl font-medium">Projects</div>
                    <div className="text-[#b1b2b3] text-center text-xs sm:text-lg">{Bio.descriptionProjects}</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                        {
                            ProjectsSet.map((project, index) => (
                                <div key={index} className="bg-[#171721] p-5 rounded-xl shadow-large max-w-[320px]">
                                    <div className="flex flex-col items-center gap-3">
                                        <Image src={project.projectImg} alt={`${project.projectName} project screenshot`} className="w-full h-40" width={320} height={160} style={{ width: 'auto', height: 'auto' }} />
                                        <div className="grid grid-cols-3 w-full gap-1">
                                            {
                                                project.skills.map((skill, index) => (
                                                    <div key={index} className="text-[#7647CF] font-medium rounded-xl flex justify-center items-center bg-[#201B31] p-2 text-xs">{skill.skillName}</div>
                                                ))
                                            }
                                        </div>
                                        <div className="flex flex-col gap-1 mb-2">
                                            <div className="text-xl font-medium max-w-full text-[#b1b2b3]">{project.projectName}</div>
                                            <div className="text-xs ml-0.5 font-light text-[#b1b2b380]">{project.date}</div>
                                            <Tooltip content={project.projectDescription} className="w-96 text-sm leading-5 p-3 bg-[#854CE6] text-white">
                                                <div className="font-light mt-2 text-[#b1b2b399] line-clamp-3">{project.projectDescription}</div>
                                            </Tooltip>
                                        </div>
                                        <Link href={project.url} target="_blank">
                                            <CustomButton title='View' className="mb-3" width="250px" />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
