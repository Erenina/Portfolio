"use client"
import { useState } from "react"

export default function CustomButton({
    textColor = "#7146E6",
    borderColor = "#7146E6",
    textHover = "#FFFFFF",
    backgroundHover = "#854CE6",
    title,
    type,
    height = '60px',
    width = '320px',
    onclick = ""
}) {
    const [isHovered, setIsHovered] = useState(false)
    const handleStyle = {
        color: isHovered ? textHover : textColor,
        backgroundColor: isHovered ? backgroundHover : '',
        borderColor,
        height,
        width
    }

    return (
        <button type={type ? type : 'submit'} onClick={onclick} className='rounded-full px-10 py-4 font-semibold flex items-center gap-2 ease-in-out duration-300 border max-w-80 min-w-40 justify-center' target="_blank" style={handleStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {title}
        </button>
    )
}
