import Image from 'next/image'
import React from 'react'
import ScrollReveal from './ScrollReveal'

const TechStack = () => {
  return (
    <section id='lab' className='relatie py-28'>
        <ScrollReveal stagger={0.08} className='text-center'>
            <p className='text-white/70 mb-6'>I’m looking to contribute as a <span className='text-[#a855f7]'>full-stack web developer</span> on a cross-functional team</p>
            <p className='text-white/50 text-sm mb-16'>that committed to building accessible web solutions that positively impact users’ lives.</p>

            <div className='relative max-w-4xl mx-auto w-full'>
                <Image
                src='/images/skills.png'
                alt='tech stack'
                width={1280}
                height={920}
                className='w-full h-auto'
                priority
                />
            </div>
        </ScrollReveal>
    </section>
  )
}

export default TechStack