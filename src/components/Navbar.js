import Resume from '../assets/CDJE--Resume--latest.pdf';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* Logo */}
      <div className='logo'>
        <a href='/'>
          <img
            className='img'
            alt='codewar-logo'
            src='https://www.codewars.com/users/CodingWithCDJE/badges/small'
          />
        </a>
      </div>

      {/* Nav items */}

      <div className='nav-container'>
        <ul className='nav'>
          <li className='nav-item'>
            <a href='/'>Home</a>
          </li>

          <li className='nav-item'>
            <a href={Resume} target='_blank' rel='noopener noreferrer'>
              Resume
            </a>
          </li>

          <li className='nav-item'>
            <a
              href='https://www.linkedin.com/in/codingwithcdje'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
