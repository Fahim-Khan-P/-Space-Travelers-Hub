import logo from '../assets/logo.png'

const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className='logoDiv'>
      <img src={logo} alt="logo..." className="logoImage" />
      <h2 className='logoText'>Space Travelers' Hub</h2>
      </div>
      <ul className='NavUl'>
        <li className='navList'>Rockets</li>
        <li className='navList'>Messions</li>
        <li className='navList'>|   My Profile</li>
      </ul>
    </nav>
  );
}

export default Navigation;