import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link"
import CustomButton from "../custom-button";
import { SocialMedia } from "../constants";
import img from '@/images/eren.jpg'
import Image from "next/image"

export default function App() {
    return (
        <Navbar className='bg-[#191924] text-white font-medium h-20'>
            <NavbarBrand>
                <div>
                    <div className="flex items-center gap-2">
                        <Image src={img} alt="Eren Çağatay profile photo" className="rounded-full" width={40} height={40} priority />
                        <div className="flex flex-col">
                            <div className="text-sm font-medium text-[#D6EDFC]">Eren Çağatay</div>
                            <Link href={SocialMedia.instagramUrl} target="_blank" rel="noreferrer" className="text-[#91949C] text-xs font-normal">{SocialMedia.instagramText}</Link>
                        </div>
                    </div>
                </div>
            </NavbarBrand>
            <NavbarContent className="hidden md:flex gap-4" justify="center">
                <NavbarItem>
                    <a color="foreground" className="hover:text-[#854CE6] ease-in-out duration-300" href="#about">
                        About
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <a href="#skills" className="hover:text-[#854CE6] ease-in-out duration-300" aria-current="page">
                        Skills
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <a color="foreground" className="hover:text-[#854CE6] ease-in-out duration-300" href="#experience">
                        Experience
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <a color="foreground" className="hover:text-[#854CE6] ease-in-out duration-300" href="#projects">
                        Projects
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <a color="foreground" className="hover:text-[#854CE6] ease-in-out duration-300" href="#certificates">
                        Certificates
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <a color="foreground" className="hover:text-[#854CE6] ease-in-out duration-300" href="#contact">
                        Contact
                    </a>
                </NavbarItem>

            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Link target="_blank" href={SocialMedia.githubUrl}>
                        <CustomButton title='Github Profile' height="50px" width="150px" />
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
