import React, { useEffect } from 'react'
import { useState } from 'react'
import{Sun, Moon} from "lucide-react"
import cn from '../lib/utils'


const themetoggle = () => {
    const[isDark,setIsDark] = useState(false);
    useEffect(()=>{
        const storedtheme = localStorage.getItem("theme");
        if(storedtheme==="dark"){
            setIsDark(true)
            document.documentElement.classList.add("dark");
        }else{
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        }
    },[])
    const toggleTheme = () =>{
        if(isDark){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light")
            setIsDark(false);
        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark")
            setIsDark(true);
        }
    }



  return <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-ful transition-colors duration-300","focus:outlin-hidden")}>{

    isDark?(<Sun className='h-6 w-6 text-yellow-500'/>
  ):(
    <Moon className='h-6 w-6 text-blue-900'/>
  
)}
</button>
}

export default themetoggle