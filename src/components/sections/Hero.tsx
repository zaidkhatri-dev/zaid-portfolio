import Navbar from '../sub/Navbar'
import ProfilePicture from '../sub/ProfilePicture'
import Description from '../sub/Description'
import CTA from '../sub/CTA'

const Hero = () => {
  return (
    <section>
        <Navbar></Navbar>
        <ProfilePicture></ProfilePicture>
        <Description></Description>
        <CTA></CTA>
    </section>
  )
}

export default Hero