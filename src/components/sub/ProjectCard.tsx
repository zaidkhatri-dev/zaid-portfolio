import type { ProjectCardProps } from '../../types/types'

const ProjectCard = ({ title, description, imageURL, githubURL, technologies }: ProjectCardProps) => {

    return (
        <div className='h-full w-full rounded-2xl bg-sbg text-pfg flex flex-col gap-3'>
            <div className='relative w-full overflow-hidden rounded-t-2xl group'>
                <img src={imageURL} className='w-full' alt="" />
                <div className='hidden md:flex items-center justify-center absolute inset-0 backdrop-blur-lg bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    <a href={githubURL} target='_blank'><img src="github_icon.svg" width={40} height={40} alt="github-link" /></a>
                </div>
            </div>
            <div className='px-4 py-3 flex flex-col gap-3'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-[18px] md:text-xl'>{title}</h3>
                    <a href={githubURL} target='_blank' className='md:hidden'><img src="github_icon.svg" width={33} height={33} alt="Github-Link" /></a>
                </div>
                <p className='text-sm md:text-[16px] text-sfg'>{description}</p>
                <p className='text-sm md:text-[16px]'>Technologies - {technologies}</p>
            </div>
        </div>
    )
}

export default ProjectCard