import Sparkle from '@assets/sparkle.svg?react';
import Star from '@assets/star.svg?react';
import Circle from '@assets/circle.svg?react';
import ArrowLine from '@assets/arrowLine.svg?react';
import ArrowHead from '@assets/arrowHead.svg?react';
import { useState } from 'react';
import { useRef } from 'react';
import PROJECT_LIST from '@/components/constans';

function Home() {
  const [selectedId, setSelectedId] = useState('');
  const listRef = useRef([]);
  const handleProjectList = (index) => {
    if (index === selectedId) {
      return setSelectedId('');
    } else {
      return setSelectedId(index);
    }
  };

  return (
    <>
      <section id='visual'>
        <div className='image-box'>
          <h2>
            Hi, I'm a
            <strong>
              challen-
              <br />
              ger
            </strong>
          </h2>
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
            <i className='deco-icon'>
              <Circle />
            </i>
            <p className='mail'>1gyn093@gmail.com</p>
            <i className='deco-icon'>
              <Circle />
            </i>
          </div>
        </div>
      </section>
      <section id='info'>
        <h2 className='hide'>INFOMATION</h2>
        <article className='basic'>
          <h3>
            노금영
            <span>noh geumyoung</span>
          </h3>
          <div className='inner'>
            <div className='my-img'></div>
            <p className='text'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos sed
              maxime inventore commodi totam iusto vitae necessitatibus atque
              esse molestias eos magnam dolores architecto quam, perspiciatis
              incidunt porro fugit provident!
            </p>
          </div>
        </article>
        <article className='work'>
          <h3>
            work
            <br />
            experience
          </h3>
          <div className='inner'>
            <ol>
              <li>
                <p className='sub-title'>
                  sub title 2021~
                  <i className='dot'></i>
                </p>
                <p className='text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  beatae perferendis praesentium quas, aliquid eum libero
                  expedita hic nemo quaerat sit neque, laboriosam non, culpa
                  cupiditate doloribus? Dignissimos, nesciunt repudiandae.
                </p>
              </li>
              <li>
                <p className='sub-title'>
                  sub title 2019~2020
                  <i className='dot'></i>
                </p>
                <p className='text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  beatae perferendis praesentium quas, aliquid eum libero
                  expedita hic nemo quaerat sit neque, laboriosam non, culpa
                  cupiditate doloribus? Dignissimos, nesciunt repudiandae.
                </p>
              </li>
              <li>
                <p className='sub-title'>
                  sub title 2019~2020
                  <i className='dot'></i>
                </p>
                <p className='text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  beatae perferendis praesentium quas, aliquid eum libero
                  expedita hic nemo quaerat sit neque, laboriosam non, culpa
                  cupiditate doloribus? Dignissimos, nesciunt repudiandae.
                </p>
              </li>
            </ol>
          </div>
        </article>
        <article className='edu'>
          <h3>education</h3>
          <div className='inner'>
            <ul>
              <li>
                <p className='sub-title'>
                  <span>2021~2024</span>
                  <strong>sub title</strong>
                </p>
                <p className='text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  voluptas at commodi molestiae libero. In odit alias minus
                  voluptates officiis quam provident reiciendis, beatae dicta
                  aspernatur enim libero dolorem et.
                </p>
              </li>
              <li>
                <p className='sub-title'>
                  <span>2021~2024</span>
                  <strong>sub title</strong>
                </p>
                <p className='text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  voluptas at commodi molestiae libero. In odit alias minus
                  voluptates officiis quam provident reiciendis, beatae dicta
                  aspernatur enim libero dolorem et.
                </p>
              </li>
            </ul>
          </div>
        </article>
        <article className='skills'>
          <h3>skills</h3>
          <div className='inner'>
            <div className='box'>
              <p className='sub-title'>tech stacks</p>
              <ul className='badge-list'>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>javaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>React Native</li>
                <li>SASS/SCSS</li>
                <li>Tailwind</li>
                <li>CSS Module</li>
                <li>Redux-toolkit</li>
                <li>GSAP</li>
                <li>Expo</li>
                <li>Zod</li>
                <li>Axios</li>
              </ul>
            </div>
            <div className='box'>
              <p className='sub-title'>tools</p>
              <ul className='badge-list'>
                <li>Git</li>
                <li>GitHub</li>
                <li>GitLab</li>
                <li>SourceTree</li>
                <li>Figma</li>
                <li>Confluence</li>
                <li>JIRA</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
              </ul>
            </div>
          </div>
        </article>
      </section>
      <section id='project'>
        <h2>project</h2>
        <div className='list'>
          {PROJECT_LIST.map(({ id, title, desc, url, img, skills }, index) => {
            return (
              <article
                key={id}
                ref={(el) => {
                  listRef.current[index] = el;
                }}
                className={selectedId === index ? 'active' : ''}
              >
                <div className='title'>
                  <button onClick={() => handleProjectList(index)}>
                    <h3>{title}</h3>
                  </button>
                  <a>
                    <i className='arrow'>
                      <ArrowHead className='arrow-head' />
                      <ArrowLine className='arrow-line' />
                    </i>
                  </a>
                </div>
                <div className='inner'>
                  <p className='text'>{desc}</p>
                  <div className='badge-list'>
                    <p>skill</p>
                    <ul>
                      {skills.map((el, index) => {
                        return <li key={el + index}>{el}</li>;
                      })}
                    </ul>
                  </div>
                  <div className='project-img'></div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Home;
