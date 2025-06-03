import { Instagram, Linkedin, Mail, MapPlus, Phone, Send } from 'lucide-react'
import React, { useState ,useEffect } from 'react'
import cn from '../lib/utils'
import { useToast } from '../hooks/use-toast'
import { Toast } from '@radix-ui/react-toast'
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {
    const {toast} = useToast();
    const [issubmitting,setIssubmitting] = useState(false);
    // const handlesubmit = (e) =>{
    //     e.preventDefault()
    //     setIssubmitting(true)
    //     setTimeout(()=>{
    //         toast({
    //             title:"Message Sent!",
    //             description: "Thank you for your message. I'll get back to you soon.",
    //         });
    //         setIssubmitting(false);
    //     },1500);
        
    // }
  const [state, handleSubmit] = useForm("mnnvqwqa");
 
useEffect(() => {
  if (state.succeeded) {
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  }
}, [state.succeeded]);



       return (
    <section id='contact' className='py-24 px -4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
            Get In <span className='text-primary'>Touch</span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Have a project, idea, or just want to connect? 
            I'm always open to meaningful conversations — 
            whether it's a question, collaboration, or a 
            simple hello, feel free to reach out!
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='space-y-8'>
                <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
                <div className='space-y-6 justify-center'>
                    <div className='flex items-start space-x-4'>
                        <div className='p-3 rounded-full bg-primary/20'>
                        <Mail className='h-6 w-6 text-primary'/>
                        </div>
                        <div>
                            <h4 className='font-medium'>E-mail</h4>
                            <a href='mailto:adityakrshah61@gmail.com'className='text-muted-foreground hover:text-primary transition-colors'>
                                Click To Mail
                            </a>
                        </div>
                    </div>
                    <div className='flex items-start space-x-4'>
                        <div className='p-3 mt-5 rounded-full bg-primary/20'>
                        <Phone className='h-6 w-6 text-primary'/>
                        </div>
                        <div>
                            <h4 className='font-medium'>Contact No.</h4>
                            <a href='tel:+977-9807064261'className='text-muted-foreground hover:text-primary transition-colors'>
                                +977-9807064261
                            </a><br/>
                            <a href='tel:+91-7986530224'className='text-muted-foreground hover:text-primary transition-colors'>
                                +91-7986530224
                            </a>
                        </div>
                    </div>
                    <div className='flex items-start space-x-4'>
                        <div className='p-3 rounded-full bg-primary/20'>
                        <MapPlus className='h-6 w-6 text-primary'/>
                        </div>
                        <div>
                            <h4 className='font-medium '>Address</h4>
                            <a className='text-muted-foreground hover:text-primary transition-colors'>
                                Nepal
                            </a>
                        </div>
                    </div>
                </div>
                <div className='pt-8'>
                    <h4 className='font-medium mb-4'>Connect With Me</h4>
                    <div className='flex space-x-4 justify-center'>
                        <a href='https://www.linkedin.com/in/aditya-kumar-shah-52a081295/' target='_blank'>
                        <Linkedin/>
                        </a>
                        <a href='https://www.instagram.com/aditya_kr_shah/?utm_source=qr#' target='_blank'>
                        <Instagram/>
                        </a>
                        <a href='mailto:adityakrshah61@gmail.com' target='_blank'>
                        <Mail/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='bg-card p-8 rounded-lg shadow-xs' >
                <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
                <form className='space-y-6' autoComplete='off' onSubmit={handleSubmit} >
                    <div >
                        <label htmlFor='name' className='block text-sm font-medium mb-2'>{" "}Your Name</label>
                        <input type='text' id='name' name='name' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Name'>
                        </input>
                        
                    </div>
                      <div >
                        <label htmlFor='email' className='block text-sm font-medium mb-2'>{" "}Your E-mail</label>
                        <input type='email' id='email' name='email' required  autoComplete="off" className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='mail@gmail.com'>
                        </input>
                    </div>
                    <div>
                        <label htmlFor='Topic' className='block text-sm font-medium mb-2'>{" "}Your Topic</label>
                        <input type='text' id='topic' name='Topic' required  autoComplete="off" className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Write Your Topic Here'>
                        </input>
                    </div>
                    
                      <div >
                        <label htmlFor='message' className='block text-sm font-medium mb-2'>{" "}Message</label>
                        <textarea type='message' id='message' name='message' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' placeholder='Write Your Message Here...'>
                        </textarea>
                        
                    </div>
                    <button type='submit' disabled={issubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                        {issubmitting?"Sending...":"Send Message"}
                        <Send size={16}/>
                    </button>
                </form>

            </div>
        </div>
        </div>
    </section>
  )
}

export default ContactSection