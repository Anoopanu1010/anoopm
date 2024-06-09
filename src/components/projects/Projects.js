import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 text-art">
        <ProjectsCard
          title="Final Year Projects For Computer Engineering"
          des="I've gathered a variety of exciting computer engineering projects for students, researchers, and engineers. Explore these creative ideas to inspire your next endeavor!"
          src={projectOne}
        />
        <ProjectsCard
          title="Web Applications"
          des="I specialize in developing web applications and responsive websites. Passionate about clean code and user-centric design, I craft dynamic online experiences tailored to client needs!"
          src={projectTwo}
        />
        <ProjectsCard
          title="IT Solutions"
          des="I specialize in IT support, infrastructure, technology consulting, security, surveillance, cyber security, remote and desktop support, and network firewall.I can help develop and support these areas for efficient and secure operation!"
          src={projectThree}
        />
        <ProjectsCard
          title="CCTV Solutions"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectThree}
        />
        <ProjectsCard
          title="Hardware service"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        {/* <ProjectsCard
          title=""
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
}

export default Projects