import{ useEffect, useState } from 'react'
import cn from '../lib/utils'
import { X,Menu} from 'lucide-react';

const navItems =[
    {name:'Home' , href :'#home'},
    {name:'About' , href :'#about'},
    {name:'Skills' , href :'#skills'},
    {name:'Work' , href :'#work'},
    {name:'Contact Me' , href :'#contact'},
];
const NavBar = () => {
    const [isscrolled, setIsscrolled] = useState(false);
    const[ismenuopen,setIsmenuopen] = useState(false);
    

useEffect(()=>{
const handlescroll = () =>{
    console.log(window.scrollY);
    setIsscrolled(window.scrollY>10);
};

window.addEventListener("scroll",handlescroll)
return()=>window.removeEventListener("scroll",handlescroll)
    },[])
  return (
    <nav className={cn("fixed  w-full z-40 transition-all duration-300 ", isscrolled? " bg-background/90 backdrop-blur-md shadow-xs py-3" : "py-5" )}>
        <div className="container flex items-center justify-between">
            <a className='text-xl font-bold text-primary flex items-center' href='#hero'>
                <span className='relative z-10'>
                    <span className='text-glow text-foreground'>Aditya Kr. Shah's </span>{"   "}
                    Portfolio
                </span>
            </a>

            {/* Desktop */}

            <div className='hidden md:flex space-x-8'>
                {navItems.map((item,key)=>(
                    <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'> 
                        {item.name}
                    </a>
                ))}
            </div>

            {/* Mobile */}

            <button onClick={()=>setIsmenuopen((prev)=>!prev)} 
                className='md:hidden p-1 text-foreground z-50 '
                aria-label={ismenuopen ? "Close Menu": "Open Menu"}
            >
            {ismenuopen ? <X size={24}/> : <Menu size ={24}/>}{" "}</button>

            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center","transition-all duration-300 md:hidden",
                ismenuopen ?"opacity-100 pointer-events-auto": "opacity-0 pointer-events-none"
            )}>
             <div className='flex flex-col space-y-8 text-xl'>
                {navItems.map((item,key)=>(
                    <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'onClick={() => setIsmenuopen(false)}> 
                        {item.name}
                    </a>
                ))}
            </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar