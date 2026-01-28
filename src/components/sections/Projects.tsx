import type { ProjectCardProps } from "../../types/types"
import ProjectCard from "../sub/ProjectCard"

const ProjectArr: ProjectCardProps[] = [{
    title: "VisionStock AI",
    description: "A website where stock can be updated using Camera, Graphs and AI for Analysis and Invoice generation feature",
    technologies: "Node.js, Express.js, YOLO, Fast API",
    imageURL: "inventory-management.png",
    githubURL: "https://github.com/zaidkhatri-dev/AI-Powered-Inventory-Management-System"
},
{
    title: "CampusPing",
    description: "A website where teachers can add events, students can view and get notified via email",
    technologies: "Node.js, Express.js, Gmail API",
    imageURL: "event.png",
    githubURL: "https://github.com/zaidkhatri-dev/Event-Notification-System"
},
{
    title: "VoteHub",
    description: "Users vote a project and the results graph is updated in real time (Used by 40+ users)",
    technologies: "React.js, Express.js, Websockets",
    imageURL: "live-voting.png",
    githubURL: "https://github.com/zaidkhatri-dev/gdg-frontend"
},
{
    title: "Blogify",
    description: "A blogging website where users can add, edit and read a blog and comment on it",
    technologies: "Node.js, Express.js",
    imageURL: "blog.png",
    githubURL: "https://github.com/zaidkhatri-dev/Blogify"
}] 

const Projects = () => {
    return (
        <section id="Projects" className="mt-32">
            <h2 className="text-[22px] md:text-[24px] mb-6">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                {ProjectArr.map((p,idx)=> (
                    <ProjectCard key={idx} title={p.title} description={p.description} imageURL={p.imageURL} technologies={p.technologies} githubURL={p.githubURL}></ProjectCard>
                )
                )}
            </div>
        </section>
    )
}

export default Projects