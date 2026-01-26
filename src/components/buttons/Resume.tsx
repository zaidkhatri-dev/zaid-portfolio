import { FileText } from 'lucide-react';

const Resume = () => {
  return (
    <button className='flex items-center text-sm md:text-[16px] gap-2 text-sfg px-3 py-2 cursor-pointer'>
        <FileText strokeWidth={1.5} size={22}/>
        <p>Resume/CV</p>
    </button>
  )
}

export default Resume