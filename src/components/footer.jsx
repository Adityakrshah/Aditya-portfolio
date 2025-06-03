import { ArrowUp } from 'lucide-react'
import React from 'react'

const footer = () => {
  return (
    <footer className='py-3  px-4 bg-card relative border-t border-border mt-3 pt-3 flex flex-wrap justify-between items-center'>
        {" "}
        <p className='text-sm text-muted-foreground'>&copy;{new Date().getFullYear()} Adityakrshah.co All rights reserved.</p>
        <a href='#home' className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'>
            <ArrowUp/>
        </a>
    </footer>
  )
}

export default footer