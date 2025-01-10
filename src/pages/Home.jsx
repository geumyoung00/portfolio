import Sparkle from '@assets/sparkle.svg?react';
import Star from '@assets/star.svg?react';

function Home() {
  return (
    <>
      <section id='visual'>
        <h2>
          Hi, I'm a{' '}
          <strong>
            challen-
            <br />
            ger
          </strong>
        </h2>
        <div className='image-box'>
          <div className='photo'></div>
          <div className='svg-box'>
            <i className='sparkle left'>
              <Sparkle />
            </i>
            <i className='sparkle right'>
              <Sparkle />
            </i>
            <i className='star'>
              <Star />
            </i>
          </div>
        </div>
      </section>
      <section className='contact'>
        <div className='inner'>
          <h2>Contact</h2>
          <div className='loop-box'>
            <p className='phone'>+82-010-7244-4018</p>
            <i className='deco-icon'></i>
            <p className='mail'>1gyn093@gmail.com</p>
            <i className='deco-icon'></i>
          </div>
        </div>
      </section>
      <section id='info'>
        <h2>info 내용</h2>
      </section>
      <section id='project'>
        <h2>project 내용</h2>
      </section>
    </>
  );
}

export default Home;
