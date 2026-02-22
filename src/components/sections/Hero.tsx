import ProfilePicture from '../sub/ProfilePicture'
import Description from '../sub/Description'
import CTA from '../sub/CTA'

const Hero = ({ heroRef }: { heroRef: React.RefObject<HTMLDivElement | null> }) => {
  return (
    <section id="Home" ref={heroRef}>
        <ProfilePicture></ProfilePicture>
        <Description></Description>
        <CTA></CTA>
    </section>
  )
}

export default Hero