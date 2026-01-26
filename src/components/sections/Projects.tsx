import type { ProjectCardProps } from "../../types/types"
import ProjectCard from "../sub/ProjectCard"

const ProjectArr: ProjectCardProps[] = [{
    title: "Mock",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.lorem5",
    technologies: "React, Next, Express",
    imageURL: "mockup.svg",
    githubURL: "https://github.com/zaidkhatri-dev/AI-Powered-Inventory-Management-System"
},
{
    title: "Mock",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.lorem5",
    technologies: "React, Next, Express",
    imageURL: "mockup.svg",
    githubURL: "https://github.com/zaidkhatri-dev/AI-Powered-Inventory-Management-System"
},
{
    title: "Mock",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.lorem5",
    technologies: "React, Next, Express",
    imageURL: "mockup.svg",
    githubURL: "https://github.com/zaidkhatri-dev/AI-Powered-Inventory-Management-System"
},
{
    title: "Mock",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.lorem5",
    technologies: "React, Next, Express",
    imageURL: "mockup.svg",
    githubURL: "https://github.com/zaidkhatri-dev/AI-Powered-Inventory-Management-System"
}] 

const Projects = () => {
    return (
        <section id="Projects" className="mt-32">
            <h2 className="text-[22px] md:text-[24px] mb-6">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {ProjectArr.map((p,idx)=> (
                    <ProjectCard key={idx} title={p.title} description={p.description} imageURL={p.imageURL} technologies={p.technologies} githubURL={p.githubURL}></ProjectCard>
                )
                )}
            </div>
        </section>
    )
}

export default Projects