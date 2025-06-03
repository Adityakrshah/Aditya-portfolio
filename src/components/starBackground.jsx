import React, { useEffect, useState } from 'react'

const starBackground = () => {

    const[stars,setstars]= useState([]);
    const[meteors,setmeteors] = useState([]);

useEffect(()=>{
    generateStars();
    generateMeteors();
    const handleresize= () =>{
        generateStars();
    }
    window.addEventListener('resize', handleresize)
    return () => window.removeEventListener('resize', handleresize)
},[]);


    const generateStars = () => {
        const numOfStars = Math.floor((window.innerWidth*window.innerHeight)/10000)
        const newStars=[]
    
        for (let i=0 ;i <numOfStars; i++){
            newStars.push({
                id:i,
                size: Math.random()*3+1,
                x: Math.random()*100,
                y:Math.random()*100,
                opacity: Math.random()*0.5+0.5,
                animationDuration: Math.random()*4+2,
            })
        }
    
        setstars(newStars);
    }
        const generateMeteors = () => {
        const numOfMeteors = 10;
        const newMeteors=[]
    
        for (let i=0 ;i <numOfMeteors; i++){
            newMeteors.push({
                id:i,
                size: Math.random()*2+1,
                x: Math.random()*100,
                y:Math.random()*20,
                delay: Math.random()*15,
                animationDuration: Math.random()*3+3,
            })
        }
    
        setmeteors(newMeteors);
    }

  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
        {stars.map((star)=>(
            <div key ={star.id} className='star animate-pulse-subtle' style={{
                width: star.size +'px',
                height:star.size +'px',
                top:star.x +'%',
                left:star.y +'%',
                opacity: star.opacity,
                animationDuration: star.animationDuration +'s',
            }}/>
        ))}
        {meteors.map((meteor)=>(
            <div key ={meteor.id} className='meteor animate-meteor' style={{
                width: meteor.size*10 +'px',
                height:meteor.size *0.5+'px',
                top:meteor.y +'%',
                left:meteor.x +'%',
                animationDelay: meteor.delay,
                animationDuration: meteor.animationDuration +'s',
            }}/>
        ))}
    </div>
  )
}

export default starBackground