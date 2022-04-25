import '../css/Hero.css';
import avatar from '../assets/jokster-chris.png';
const Hero = ({ nickName, position }) => {
  return (
    <div className='hero-container'>
      <div className='img-container'>
        <img className='img-avatar' src={avatar} alt='Avatar' />
      </div>

      <div className='caption-container'>
        <h1 className='hero-font-size hero-text-center hero-text-color'>
          <strong>Hi, I'm {nickName} </strong>
        </h1>
        <h3 className='hero-font-size hero-text-center hero-text-color'>
          {position}
        </h3>
      </div>
      <div className='headerTwo-caption-container'>
        <h2 className='hero-font-size hero-text-center hero-text-color'>
          Scroll down to learn more
        </h2>
      </div>
    </div>
  );
};

export default Hero;
