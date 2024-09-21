
import hero from '../assets/Hero.png'
import hero_m from '../assets/hero_m.png'

export default function HeroBanner() {
  return (
    <div className='m-2'>            
        <img className='md:hidden'  src={hero} alt="hero banner"/>
        <img className='cmd:hidden' src={hero_m} alt="hero banner"/>

</div>
  )
}
