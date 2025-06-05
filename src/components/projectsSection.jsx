import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import React from 'react'
const projects = [
 {
  id: 1,
  title:"AAAJMV",
  description:"A responsive school management system built with React JS.",
  image:"/projects/project1.png",
  tags:["React","Material-UI","Javascript"],
  demoUrl:"/NotFound.jsx",
  githubUrl:"/NotFound.jsx",
 },
 {
  id: 2,
  title:"Portfolio Website",
  description:"A personal website showcasing my skills and projects.",
  image:"/projects/project2.png",
  tags:["React","TailwindCss","Javascript"],
  demoUrl:"https://adityakrshah.vercel.app/",
  githubUrl:"https://github.com/Adityakrshah/Aditya-portfolio",
 },
//  {
//   id: 3,
//   title:"AAAJMV",
//   description:"",
//   image:"/projects/project1.png",
//   tags:["React","Material-UI","Javascript"],
//   demoUrl:"#",
//   githubUrl:"#",
//  }
];

const projectsSection = () => {
  return (
    <section id='work' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          {" "}
          Featured <span className='text-primary'> Projects</span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Here are some of my projects crafted with purpose, creativity, and dedication—showcasing 
          my skills and passion for building impactful digital experiences. Stay tuned, as more innovative works are on the way.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project,key)=>(
            <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>
              <div className='h-48 overflow-hidden'>
                <img src={project.image} alt={project.title} classname='w-full h-full object-cover transition-transform duation-500 group-hover:scale-110'/>
              </div>
              <div className='p-3.5 '>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag)=>(
                    <span className='px-2 py-1 text-xs border hover:scale-110 font-medium rounded-full bg-secondary text-secondary-foreground'>{tag}</span>
                  ))}
                </div>
              <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
              <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
              <div className='flex justify-between items-center'>
                <div className='flex space-x-3'>
                  <a href={project.demoUrl} target='_blank' className='text-foreground/90 hover:text-primary transition-colors duration-300'>
                  <ExternalLink size={20}/>
                  </a>
                  <a href={project.githubUrl} target='_blank' className='text-foreground/90 hover:text-primary transition-colors duration-300'>
                  <Github size={20}/>
                  </a>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
       <div className='lg:flex flex-items  gap-120'> 
        <div className='text-center mt-12'>
          <a  href="https://gitlab.com/Adityakrshah "
              target="_blank"
              className='cosmic-button w-fit flex items-center mx-auto gap-2'>
            Check My Gitlab<ArrowRight size={16}/>
          </a>
        </div>
        <div className='text-center mt-12'>
          <a  href="https://github.com/Adityakrshah "
              target="_blank"
              className='cosmic-button w-fit flex items-center mx-auto gap-2'>
            Check My Github<ArrowRight size={16}/>
          </a>
        </div>
      </div>
      </div>
    </section>
  )
}

export default projectsSection