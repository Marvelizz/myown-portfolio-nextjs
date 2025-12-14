import Image from 'next/image'
import React from 'react'
import ScrollReveal from './ScrollReveal'
import { FiExternalLink } from 'react-icons/fi'

const ProjectsSection = () => {
  return (
    <section id="projects" className='relative py-28 space-y-24'>

{/*-------------------------------------------------- Projects --------------------------------------------------*/}
        <div className="flex justify-center">
            <h4
                className="font-extrabold text-2xl md:text-3xl tracking-tight underline"
                style={{
                    background: 'linear-gradient(90deg, #a84bf7 0%, #3dd7ff 100%)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    textDecorationColor: 'rgba(168,75,247,0.6)',
                    textDecorationThickness: '3px',
                    textUnderlineOffset: '6px',
                }}
                data-color-start="#a84bf7"
                data-color-end="#3dd7ff"
            >
                The Grinds
            </h4>
        </div>




    {/*-------------------------------------------------- 1st Project --------------------------------------------------*/}
        <div>
            <div className='pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl'
            style={{
                background: 'radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)',
            }}
            />
            <ScrollReveal stagger={0.12} className='grid grid-cols-1 md:grid-cols-2 items-center'>
                <div className='relative -pl-50 z-10'>
                    {/* heading */}
                    <div className='mb-12'>
                        <p className='text-xs text-[#a48cc9]'>Project-01</p>
                        <h3 className='text-2xl md:text-3xl font-semibold text-white/90'>Travel Web Site</h3>
                    </div>

                    {/* description */}
                    <div className='relative md:-mr-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,0.25)]'>
                        <p className='text-sm p-4 text-white/75'>A web application built with Next.js and TypeScript that delivers fast, SEO-friendly pages and a smooth user experience. It leverages modern JavaScript and CSS to create responsive layouts, reusable components, and efficient data flow.</p>
                        <div className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                        style={{
                            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.05))',
                        }}
                        />
                    </div>
                    <div className='mt-1 ml-2 flex justify-start space-x-3 text-white/60'>
                        <label>
                        <a 
                        href="https://lgoon-travels.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ml-2 inline-flex items-center gap-1 underline hover:text-white/80 transition-colors duration-200">
                        Visit link
                        <FiExternalLink className="w-4 h-4" aria-hidden="true"/>
                        </a>
                        </label>
                    </div>
                </div>

                {/* project image */}
                <div>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168, 85, 247, 0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1'>
                        <div className='overflow-hidden h-[360px]'>
                            <Image src="/images/image.jpg" alt='portflio-1' width={582} height={640} className='w-full h-auto transition-transform duration-3500 ease-linear group-hover:-translate-y-[86%] group-active:-translate-y-[55%] group-focus:-translate-y-[55%]'/>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>


{/*-------------------------------------------------- 2nd Project --------------------------------------------------*/}
        <div>
            <div className='pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl'
            style={{
                background: 'radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)',
            }}
            />
            <ScrollReveal stagger={0.14} delay={0.8} className='grid grid-cols-1 md:grid-cols-2 items-center'>
                {/* text content */}
                <div className='relative md:order-2 z-10'>
                    {/* heading */}
                    <div className='mb-12 text-right'>
                        <p className='text-xs text-[#a48cc9]'>Project-02</p>
                        <h3 className='text-2xl md:text-3xl font-semibold text-white/90'>Featured Travel Website</h3>
                    </div>

                    {/* description */}
                    <div className='relative md:-ml-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,0.25)]'>
                        <p className='text-sm p-4 text-white/75'>A production-ready full-stack web application built with Next.js, React.js, Redux, and TypeScript. It integrates Firebase for authentication and database management, supports CMS-based content updates, and is deployed with optimized performance, secure hosting, and a custom domain.</p>
                        <div className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                        style={{
                            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.05))',
                        }}
                        />
                    </div>
                    <div className='mt-1 ml-120 flex justify-start space-x-3 text-white/60'>
                        <label>
                        <a 
                        href="https://www.skypeaholidays.com/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ml-2 inline-flex items-center gap-1 underline hover:text-white/80 transition-colors duration-200">
                        Visit link
                        <FiExternalLink className="w-4 h-4" aria-hidden="true"/>
                        </a>
                        </label>
                    </div>
                </div>

                {/* project image */}
                <div className='relative md:order-1'>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168, 85, 247, 0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1'>
                        <div className='overflow-hidden md:h-[360px] h-[250px]'>
                            <Image src="/images/image2.png" alt='portflio-1' width={582} height={640} className='w-full h-auto transition-transform duration-3500 ease-linear group-hover:-translate-y-[94%] group-active:-translate-y-[55%] group-focus:-translate-y-[55%]'/>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    

    

{/*-------------------------------------------------- Random Projects --------------------------------------------------*/}
        <div className="flex justify-center">
            <h4
                className="font-extrabold text-2xl md:text-3xl tracking-tight underline"
                style={{
                    background: 'linear-gradient(90deg, #a84bf7 0%, #3dd7ff 100%)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    textDecorationColor: 'rgba(168,75,247,0.6)',
                    textDecorationThickness: '3px',
                    textUnderlineOffset: '6px',
                }}
                data-color-start="#a84bf7"
                data-color-end="#3dd7ff"
            >
                My Scrolls
            </h4>
        </div>


 {/*-------------------------------------------------- 3rd Project --------------------------------------------------*/}
        <div>
            <div className='pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl'
            style={{
                background: 'radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)',
            }}
            />
            <ScrollReveal stagger={0.14} delay={0.8} className='grid grid-cols-1 md:grid-cols-2 items-center'>
                {/* text content */}
                <div className='relative md:order-2 z-10'>
                    {/* heading */}
                    <div className='mb-12 text-right'>
                        <p className='text-xs text-[#a48cc9]'>Project-01</p>
                        <h3 className='text-2xl md:text-3xl font-semibold text-white/90'>Hacker News Clone</h3>
                    </div>

                    {/* description */}
                    <div className='relative md:-ml-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,0.25)]'>
                        <p className='text-sm p-4 text-white/75'>I build visually appealing and highly functional web applications. Check out my Hacker News clone project,
                        which showcases my ability to transform raw API data into a simple, good-looking view using React.
                        My focus is always on creating intuitive and clean interfaces that prioritize the user.</p>
                        <div className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                        style={{
                            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.05))',
                        }}
                        />
                    </div>
                    <div className='mt-1 ml-120 flex justify-start space-x-3 text-white/60'>
                        <label>
                        <a 
                        href="https://hackersnews-clone.netlify.app" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ml-2 inline-flex items-center gap-1 underline hover:text-white/80 transition-colors duration-200">
                        Visit link
                        <FiExternalLink className="w-4 h-4" aria-hidden="true"/>
                        </a>
                        </label>
                    </div>
                </div>

                {/* project image */}
                <div className='relative md:order-1'>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168, 85, 247, 0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1'>
                        <div className='overflow-hidden md:h-[360px] h-[250px]'>
                            <Image src="/images/hackersnews.png" alt='portflio-1' width={582} height={640} className='w-full h-auto transition-transform duration-3500 ease-linear group-hover:-translate-y-[88%] group-active:-translate-y-[55%] group-focus:-translate-y-[55%]'/>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>



{/*-------------------------------------------------- End of Projects --------------------------------------------------*/}
        
        <div>
            <div className='pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl'
            style={{
                background: 'radial-gradient(60% 60% at 60% 40%, rgba(125, 58, 242, 0.65) 0%, rgba(18, 8, 36, 0) 70%)',
            }}
            />
            <ScrollReveal stagger={0.12} className='grid grid-cols-1 md:grid-cols-2 items-center'>
                <div className='relative -pl-50 z-10'>
                    {/* heading */}
                    <div className='mb-12'>
                        <p className='text-xs text-[#a48cc9]'>Project-02</p>
                        <h3 className='text-2xl md:text-3xl font-semibold text-white/90'>Commercial Website</h3>
                    </div>

                    {/* description */}
                    <div className='relative md:-mr-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-white/6 backdrop-blur-sm border border-white/10 shadow-[0_6px_50px_rgba(126,34,206,0.25)]'>
                        <p className='text-sm p-4 text-white/75'>A web application built with Next.js and TypeScript that delivers fast, SEO-friendly pages and a smooth user experience. It leverages modern JavaScript and CSS to create responsive layouts, reusable components, and efficient data flow.</p>
                        <div className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                        style={{
                            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(168, 85, 247, 0.05))',
                        }}
                        />
                    </div>
                    <div className='mt-1 ml-2 flex justify-start space-x-3 text-white/60'>
                        <label>
                        <a 
                        href="https://fastfoo-die.netlify.app/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ml-2 inline-flex items-center gap-1 underline hover:text-white/80 transition-colors duration-200">
                        Visit link
                        <FiExternalLink className="w-4 h-4" aria-hidden="true"/>
                        </a>
                        </label>
                    </div>
                </div>

                {/* project image */}
                <div>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden bg-[#0f061c] border border-[#2f1c55] shadow-[0_0_90px_rgba(168, 85, 247, 0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1'>
                        <div className='overflow-hidden h-[360px]'>
                            <Image src="/images/fastfoodie.png" alt='portflio-1' width={582} height={640} className='w-full h-auto transition-transform duration-3500 ease-linear group-hover:-translate-y-[93%] group-active:-translate-y-[55%] group-focus:-translate-y-[55%]'/>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>





    </section>
  )
}

export default ProjectsSection