import { Bio, ExperienceSet } from "../constants"

export default function Experience() {
    return (
        <div id="experience" className="bg-[#1C1D2A] pt-16 pb-10">
            <div className='w-full container mx-auto max-w-6xl text-white'>
                <div className="flex flex-col items-center justify-center gap-6">
                    <div className="text-white text-4xl font-medium">Experience</div>
                    <div className="text-[#b1b2b3] text-center text-sm sm:text-lg">{Bio.descriptionSkills}</div>
                    {
                        ExperienceSet.map((item, index) => (
                            <div key={index} className="border border-solid border-[#284FA0] flex flex-col gap-1.5 p-4 text-white rounded-xl tracking-wider max-w-[300px] md:max-w-[700px]">
                                <div className="flex gap-3">
                                    <img className="rounded-lg" src={item.companyImg} alt={`${item.companyName} logo`} width={50} height={50} />
                                    <div className="flex justify-start flex-col gap-1">
                                        <div className="text-lg font-medium text-[#F2F3F499]">{item.job}</div>
                                        <div className="text-sm font-normal text-[#b1b2b399]">{item.companyName}</div>
                                        <div className="text-sm font-light text-[#b1b2b380]">{item.date}</div>
                                    </div>
                                </div>
                                <div className="text-[15px] font-light text-[#F2F3F499]">{item.description}</div>
                                <div className="text-[15px] font-semibold text-[#F2F3F499]">Skills: <span className="font-light">{item.skills}</span></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
