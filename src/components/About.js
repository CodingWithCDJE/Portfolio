import '../css/About.css';

const About = ({ firstName, lastName, nickName }) => {
  return (
    <div className='about-container'>
      <h1 className='text-center text-color'>console.log('Bio');</h1>
      <p className='text-padding text-color text-size'>
        Hey, so you wanted to know more. I'm glad, welcome to my portfolio. My
        name is {firstName} {lastName}, {nickName} is what I'm mostly known as.
      </p>

      <div className='text-color text-size'>
        <ul className='text-margin'>
          <li>
            I recently graduated with a Bachelor's in Computer Science from CUNY
            Lehman College
          </li>
          <li>
            My passion falls towards fullstack, it just fascinates me how it all
            works when put together nicely
          </li>
          <li>
            Team player, hardworker, dependable, and a challenger who would be
            interested in bringing these values to the team.
          </li>
          <li>
            Contact info will be located at the bottom of the page, don't
            hesitate to send me a message on either LinkedIn or through email
          </li>
        </ul>
      </div>

      <h2 className='text-center text-color'>P.S:</h2>
      <p className='text-padding text-color text-size'>
        I am a big fan of console.log, which is why I implemented it as my
        header. My hobbies are to travel and eat different culture foods. I also
        read mangas, and watch tv shows.
      </p>
    </div>
  );
};

export default About;
