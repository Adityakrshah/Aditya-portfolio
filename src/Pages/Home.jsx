import React from 'react'
import Herosection from '../components/herosection';
import Themetoggle from '../components/themetoggle';
import StarBackground from '../components/starBackground';
import NavBar from '../components/NavBar';
import ProjectsSection from '../components/projectsSection';
import About from '../components/About';
import Footer from '../components/footer';
import ContactSection from '../components/ContactSection';
import SkillSection from '../components/skillSection';
const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* {Theme Toggle} */}
        
            <Themetoggle/>

        {/* {Background Effects} */}

           <StarBackground/>

        {/* {Nav Bar} */}

        <NavBar/>

        {/* {Main Content} */}
        <main>
          <Herosection/>
          <About/>
          <SkillSection/>
          <ProjectsSection/>
          <ContactSection/> 
        </main>



        {/* {Footer} */}
        <Footer/>
    </div>
  )
}

export default Home;