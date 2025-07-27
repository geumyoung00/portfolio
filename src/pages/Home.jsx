import Sparkle from '@assets/sparkle.svg?react';
import Star from '@assets/star.svg?react';
import Circle from '@assets/circle.svg?react';
import ArrowLine from '@assets/arrowLine.svg?react';
import ArrowHead from '@assets/arrowHead.svg?react';
import { useState } from 'react';
import { useRef } from 'react';
import { WORK_EXPERIENCE, EDUCATION, SKILLS, PROJECT_LIST } from '@/components/constans';
import { Link } from 'react-router';

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
            Hi, I&apos;m a
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
              React와 TypeScript를 주로 사용하며 Next.js 환경에서 서버 사이드 렌더링과 정적 페이지 생성을 경험하고
              있습니다. Context API, Redux Toolkit, Zustand 등 다양한 상태 관리 기술을 활용했고, Tailwind CSS,
              styled-components, SASS 등 스타일링 기술에도 익숙합니다. 다수의 웹접근성 인증 경험으로 실무 이해도를
              갖췄으며, UI/UX 디자인 및 기획, 퍼블리싱 분야에서 쌓은 다년간 경험이 강점입니다. 문제 너머의 이유를
              고민하며 끈기 있게 해결책을 찾고, 꾸준한 디버깅과 최적화를 통해 안정성과 품질을 개선에 노력합니다.
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
              {WORK_EXPERIENCE.map(({ id, title, desc }) => {
                return (
                  <li key={id}>
                    <p className='sub-title'>
                      {title}
                      <i className='dot'></i>
                    </p>
                    <p className='text'>{desc}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </article>
        <article className='edu'>
          <h3>Training</h3>
          <div className='inner'>
            <ul>
              {EDUCATION.map(({ id, title, dates, desc }) => {
                return (
                  <li key={id}>
                    <p className='sub-title'>
                      <span>{dates}</span>
                      <strong>{title}</strong>
                    </p>
                    <p className='text'>{desc}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
        <article className='skills'>
          <h3>skills</h3>
          <div className='inner'>
            {SKILLS.map(({ id, title, stacks }) => {
              return (
                <div key={id} className='box'>
                  <p className='sub-title'>{title}</p>
                  <ul className='badge-list'>
                    {stacks.map((item, idx) => {
                      return <li key={`fd_${idx}`}>{item}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </article>
      </section>
      <section id='project'>
        <h2>project</h2>
        <div className='list'>
          {PROJECT_LIST.map(({ id, title, desc, skills, imgUrl, src, alt }, index) => {
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
                  <Link src={src}>
                    <i className='arrow'>
                      <ArrowHead className='arrow-head' />
                      <ArrowLine className='arrow-line' />
                    </i>
                  </Link>
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
                  <div className='project-img'>
                    <img src={imgUrl} alt={alt} />
                  </div>
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
