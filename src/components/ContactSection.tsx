import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import ScrollReveal from './ScrollReveal'

const ContactSection = () => {
  return (
    <section id="contact" className='py-24 relative'>
        <ScrollReveal stagger={0.08}>
            <h3 className='text-2xl md:text-3xl font-semibold text-white/90 mb-7'>Contact</h3>
            <p className='text-sm text-white/60 max-w-xl'>I’m currently seeking to collaborate with cross-functional teams that prioritize improving lives through accessible, 
            user-centered design. If you have a project in mind or are building something meaningful, I would welcome the opportunity to connect.</p>
            
            <div className="mt-6 flex flex-col gap-3 text-white/80">
              <Link
                  href="mailto:ansariyaansu786@gmail.com"
                  className="flex items-center gap-2 hover:text-[#a855f7]">
                  <MdEmail size={18} />
                   <span>ansariyaansu786@gmail.com</span>
                </Link>

                <Link
                  href="https://wa.me/+918078855446"
                  className="flex items-center gap-2 hover:text-[#a855f7]">
                  <FaWhatsapp size={18} />
                   <span>+91 8078855446</span>
                </Link>

            </div>





            <div className='mt-6 flex items-center gap-4 text-white/80'>
                <Link href="https://www.instagram.com/_mhd_ans_r_?igsh=NTNhMml1Z24yMHF1" target="_blank" rel="noopener noreferrer" className='hover:text-[#a855f7]'>
                <FaInstagram className='size-5'/>
                </Link>
                <Link href="https://www.facebook.com/share/1BN6NEcqPH/" target="_blank" rel="noopener noreferrer" className='hover:text-[#a855f7]'>
                <FaFacebook className='size-5'/>
                </Link>
                <Link href="https://youtube.com/@isle_nomadic?si=8-8O5E3zof5L8U5P" target="_blank" rel="noopener noreferrer" className='hover:text-[#a855f7]'>
                <FaYoutube className='size-5'/>
                </Link>
            </div>
        </ScrollReveal>
    </section>
  )
}

export default ContactSection