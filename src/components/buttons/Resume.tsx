import { FileText } from 'lucide-react';

const Resume = () => {
  const handleClick = ()=>{
    window.open("https://drive.google.com/file/d/1q4XVfcMr5LTjaYQEmHVVRyCfe-fZWpT1/view?usp=sharing","_blank")
  }
  
  return (
    <button onClick={handleClick} className='flex items-center text-sm md:text-[16px] gap-2 text-sfg px-3 py-2 cursor-pointer'>
        <FileText strokeWidth={1.5} size={22}/>
        <p>Resume/CV</p>
    </button>
  )
}

export default Resume