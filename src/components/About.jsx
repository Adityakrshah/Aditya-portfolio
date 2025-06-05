import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
        {" "}
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                About<span className='text-primary'>Me</span>
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                    <h3 className='text-2xl font-semibold'>
                     Web Developer 
                    </h3>
                    <p className='text-muted-foreground'>
                        I'm a    web developer specializing in front-end development. 
                        I enjoy building responsive, interactive websites that offer smooth and 
                        engaging user experiences. I focus on clean code, good design, and 
                        responsive layouts.
                    </p>
                    <p className='text-muted-foreground'>
                        I work mainly with React, Tailwind CSS, and JavaScript, and 
                        I'm always excited to explore new technologies to grow as a developer. 
                        I'm eager to keep learning and improving, aiming to create better and 
                        more dynamic web experiences in the future.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 pt-4 justifu-center'>
                        <a href='#contact' className='cosmic-button'>
                            {" "}
                            Get In Touch
                        </a>
                        <a href="/Aditya_s_CV.pdf" target="_blank" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/30 transition-colors duration-300'>
                            View My CV
                        </a>
                    </div>
                </div>
                <div className='grid grid-cols-1gap-6'>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                            <Code className=' h-6 w-6 text-primary'/>
                    </div>
                    <div className='text-left'>
                        <h4 className='font-semibold text-lg'>Web Development</h4>
                        <p className='text-muted-foreground'>
                            Creating Responsive Websites Using Modern Frameworks.
                        </p>
                    </div>
                    </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                            <User className=' h-6 w-6 text-primary'/>
                    </div>
                    <div className='text-left'>
                        <h4 className='font-semibold text-lg'>Graphic Designing</h4>
                        <p className='text-muted-foreground'>
                            Creating visual content for branding and events.
                        </p>
                    </div>
                    </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                            <Briefcase className=' h-6 w-6 text-primary'/>
                    </div>
                    <div className='text-left'>
                        <h4 className='font-semibold text-lg'>Project & Team Coordination</h4>
                        <p className='text-muted-foreground'>
                            Managing and coordinating successful and goal-driven projects and events.
                        </p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About