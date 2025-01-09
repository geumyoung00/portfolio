import Logo from '../assets/logo.svg?react';

const Header = () => {
  return (
    <header className='header'>
      <h1>
        <Logo />
        <span className='logoTitle'>NOH GEUMYOUNG</span>
      </h1>
      <nav>
        <div className='menu'>
          <span>INFO</span>
        </div>
        <div className='menu'>
          <span>PROJECT</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
