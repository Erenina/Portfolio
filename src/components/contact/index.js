"use client"
import { useState } from "react"
import { Bio } from "../constants"
import { IoRocketSharp } from "react-icons/io5";
import CustomButton from "../custom-button";

export default function Contact() {

    const [message, setMessage] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
    }

    const sendEmail = () => {
        const email = `mailto:erencagatay@live.com?subject=Kullanıcı Mesajı&body=${encodeURIComponent(message)}`;
        window.location.href = email;
    };
    return (
        <div id="contact" className="bg-[#1C1D2A] pt-16 pb-10">
            <div className='w-full container mx-auto max-w-6xl text-white'>
                <div className="flex flex-col items-center justify-center gap-6">
                    <div className="text-white text-4xl font-medium">Contact</div>
                    <div className="text-[#b1b2b3] text-center max-w-[600px] text-sm sm:text-lg">{Bio.descriptionContact}</div>
                    <form onSubmit={handlesubmit} className="bg-[#191924] flex flex-col max-w-[300px] sm:min-w-[600px] p-8 gap-3 items-center rounded-xl">
                        <div className="text-2xl font-semibold text-[#F2F3F4] flex gap-2">Email Me <IoRocketSharp size={25} /></div>

                        <textarea
                            id="message"
                            rows="4"
                            cols="50"
                            value={message}
                            required
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your Message"
                            className="bg-transparent w-full h-40 outline-none border border-solid border-[#b1b2b3] px-3 py-4 rounded-xl focus:border-[#854CE6] placeholder:text-[#F2F3F4] placeholder:text-lg placeholder:font-thin"
                        />
                        <CustomButton title='Submit' width="200px" onclick={sendEmail} />
                    </form>
                </div>
            </div>
        </div>
    )
}