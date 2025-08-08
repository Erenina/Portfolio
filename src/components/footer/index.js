import Link from "next/link"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { SocialMedia, Bio } from "../constants";

export default function Footer() {
    return (
        <div id="experience" className="bg-[#1C1C27] pt-16 pb-10">
            <div className='w-full container mx-auto max-w-6xl text-white'>
                <div className="flex flex-col items-center justify-center gap-6">
                    <div className="text-[#854CE6] text-xl font-semibold">Eren Çağatay</div>
                    <div className="flex gap-4 sm:gap-9 text-sm sm:text-xl">
                        <a color="foreground" className="hover:text-[#854CE6] ease-in-out duration-300" href="#about">
                            About
                        </a>
                        <a href="#skills" className="hover:text-[#854CE6] ease-in-out duration-300" aria-current="page">
                            Skills
                        </a>
                        <a color="foreground" className="hover:text-[#854CE6] ease-in-out duration-300" href="#experience">
                            Experience
                        </a>
                        <a color="foreground" className="hover:text-[#854CE6] ease-in-out duration-300" href="#projects">
                            Projects
                        </a>
                        <a color="foreground" className="hover:text-[#854CE6] ease-in-out duration-300" href="#certificates">
                            Certificates
                        </a>
                        <a color="foreground" className="hover:text-[#854CE6] ease-in-out duration-300" href="#contact">
                            Contact
                        </a>
                    </div>
                    <div className="flex gap-8">
                        <Link className="hover:text-[#854CE6] ease-in-out duration-300" href={SocialMedia.githubUrl} target="_blank">
                            <FaGithub size={23} />
                        </Link>
                        <Link className="hover:text-[#854CE6] ease-in-out duration-300" href={SocialMedia.linkedinUrl} target="_blank">
                            <FaLinkedin size={23} />
                        </Link>
                        <Link className="hover:text-[#854CE6] ease-in-out duration-300" href={SocialMedia.instagramUrl} target="_blank">
                            <FaInstagram size={23} />
                        </Link>
                    </div>
                    <div className="mt-6 text-sm sm:text-base">{Bio.descriptionFooter}</div>
                </div>
            </div>
        </div>
    )
}