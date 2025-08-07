"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CertificatesSet } from "../constants";
import Image from "next/image";

const CertificateCard = ({ certificate, index, onImageClick }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#171721] border border-solid border-[#7846CF] rounded-xl p-6 h-fit"
    >
      <div className="w-full mb-4 flex justify-center">
        <Image
          src={certificate.image}
          alt={certificate.name}
          className="w-full h-auto object-contain rounded-xl cursor-pointer"
          width={400}
          height={300}
          onClick={() => onImageClick(certificate)}
          priority={index === 0}
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      <div className="text-white">
        <h3 className="font-bold text-xl mb-2">{certificate.name}</h3>
        <p className="text-[#b1b2b3] text-sm mb-1">{certificate.issuer}</p>
        <p className="text-[#b1b2b3] text-sm mb-3">{certificate.date}</p>
        <p className="text-[#b1b2b3] text-sm leading-relaxed">{certificate.description}</p>
      </div>
    </motion.div>
  );
};

const CertificateModal = ({ certificate, isOpen, onClose }) => {
  if (!isOpen || !certificate) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-[90vh] bg-[#171721] rounded-xl overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-[#7846CF] text-2xl font-bold z-10 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
        >
          ×
        </button>
        <div className="p-6">
          <h3 className="text-white text-xl font-bold mb-2">{certificate.name}</h3>
          <p className="text-[#b1b2b3] text-sm mb-4">{certificate.issuer}</p>
        </div>
        <div className="flex justify-center items-center p-4">
          <Image
            src={certificate.image}
            alt={certificate.name}
            className="max-w-full max-h-[60vh] object-contain rounded-lg"
            width={800}
            height={600}
            onClick={(e) => e.stopPropagation()}
            priority={false}
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
        <div className="p-6">
          <p className="text-[#b1b2b3] text-sm leading-relaxed">{certificate.description}</p>
          <p className="text-[#b1b2b3] text-sm mt-2">{certificate.date}</p>
        </div>
      </div>
    </div>
  );
};

export default function Certificates() {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = (certificate) => {
        setSelectedCertificate(certificate);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCertificate(null);
    };

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
        <div id="certificates" className="bg-[#1C1C27] pt-16">
            <div className='w-full container mx-auto max-w-6xl'>
                <motion.div variants={container} initial='hidden' animate='visible' className="flex flex-col items-center justify-center gap-6">
                    <motion.div variants={item} className="text-white text-4xl font-medium">Certificates</motion.div>
                    <motion.div variants={item} className="text-[#b1b2b3] text-center max-w-[600px] text-sm sm:text-lg">
                        I have obtained various certifications that demonstrate my expertise and commitment to continuous learning. 
                        These certificates validate my skills and knowledge in different areas of technology and development.
                    </motion.div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 mb-10">
                        {CertificatesSet.map((certificate, index) => (
                            <CertificateCard
                                key={`certificate-${index}`}
                                index={index}
                                certificate={certificate}
                                onImageClick={handleImageClick}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
            
            <CertificateModal
                certificate={selectedCertificate}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    )
}
