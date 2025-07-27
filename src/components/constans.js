const WORK_EXPERIENCE = [
  {
    id: '1',
    title: '(주)일렉오션 2021.02 - 2024.04',
    desc: '공공기관 및 기업 웹 프로젝트를 다수 수행하며 기획, 디자인, 퍼블리싱으로 시작하여 입사 3년차 부터 React Next.js, TypeScript 기반의 프론트엔드 개발까지 담당했습니다. 디자인 시스템을 구축해 UI의 일관성과 유지보수성을 높였고, 컴포넌트 단위 개발과 상태 관리(Context API), 데이터 시각화(Chart.js) 등 다양한 기능 구현 경험을 쌓았습니다. 또한 GSAP, Tailwind CSS를 활용한 인터랙티브 애니메이션과 반응형 레이아웃 설계를 통해 사용자 경험을 개선하고 웹접근성 인증을 획득하는 데 기여했습니다.',
  },
  {
    id: '2',
    title: '(주)클릭커뮤니케이션 2018. 12 - 2019. 10',
    desc: '여행 관련 서비스 웹사이트를 중심으로 UI 디자인과 퍼블리싱을 담당하며, 예약·결제 시스템 등 복잡한 사용자 플로우를 직관적이고 접근성 높은 구조로 구현했습니다. 시멘틱 마크업과 키보드 네비게이션을 포함한 웹표준·웹접근성 준수 작업을 다수 수행했으며, 반응형 레이아웃 설계와 이미지 최적화를 통해 다양한 디바이스에서 안정적인 사용성을 확보했습니다. 또한 이벤트 페이지, 랜딩 페이지, 배너 등 마케팅 연계 콘텐츠 제작과 운영 유지보수 경험을 쌓았습니다.',
  },
  {
    id: '2',
    title: '이외 디자인 및 퍼블리싱 경력 보유',
    desc: '휴대폰 온라인 판매 웹서비스, 온라인 교육 및 관리 서비스 등 다수의 프로젝트 디자인 및 퍼블리싱 경험을 보유하고 있습니다.',
  },
];

const EDUCATION = [
  {
    id: '1',
    title: 'Kernel 360 프론트엔드 단기 심화 과정',
    dates: '25.05 – 08',
    desc: 'React, TypeScript, Next.js를 활용한 프론트엔드 개발 심화 과정, 프로젝트 중심 실무 훈련.',
  },
  {
    id: '2',
    title: 'React & Redux 웹 프로그래밍',
    dates: '22.08 – 10',
    desc: 'HTML, CSS, JavaScript 기초 및 React를 활용한 SPA 개발, Redux 상태 관리와 클론 코딩을 통한 프로젝트 수행.',
  },
  {
    id: '3',
    title: 'SBS아카데미컴퓨터아트학원 [NCS 기반] 프론트엔드 과정',
    dates: '16.05 - 08',
    desc: 'HTML/CSS, JavaScript, jQuery, 반응형 웹 개발',
  },
];

const SKILLS = [
  {
    id: '1',
    title: 'Frontend Development',
    stacks: ['React', ' Next.js', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'Zustand', 'Axios'],
  },
  { id: '2', title: 'Styling & UI', stacks: ['Tailwind CSS', 'SASS/SCSS', 'CSS Modules', 'styled-components', 'GSAP'] },
  {
    id: '3',
    title: 'Tools',
    stacks: [
      'Git',
      'GitHub',
      'GitLab',
      'SourceTree',
      'JIRA',
      'Confluence',
      'Figma',
      'Adobe Photoshop',
      'Adobe Illustrator',
    ],
  },
];

const PROJECT_LIST = [
  {
    id: 1,
    title: '자료 수집 모니터링 관리 시스템',
    dates: '',
    desc: '부산 테크노파크의 R&D 사업으로 진행한 자료 수집 모니터링 및 자료 관리 시스템 프로토타입 프로젝트입니다. 수집할 데이터들의 수집 주기와 수집 방법에 대해서 분류, 등록하여 관리하고 수집되는 상태와 로그를 보여줌으로써 데이터 수집을 감시합니다. 처음 진행해 본 백엔드팀과의 협업으로 API 연동 과정에서 데이터 구조 정의 및 상태 관리 최적화에 대한 이해를 높일 수 있었습니다.',
    src: 'https://github.com/geumyoung00/data-app',
    imgUrl: 'https://github.com/user-attachments/assets/39851393-9989-4137-9bb5-98a284256f4c',
    alt: '자료 수집 모니터링 관리 시스템 디자인 시안',
    skills: ['Next.js', 'SASS', 'ContextAPI', 'TypeScript', 'Chart.js', 'zod'],
  },
  {
    id: 2,
    title: 'project name',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt beatae perferendis praesentium quas, aliquid eum libero expedita hic nemo quaerat sit neque, laboriosam non, culpa cupiditate doloribus? Dignissimos, nesciunt repudiandae.',
    src: '',
    imgUrl: '',
    skills: ['React', 'Next.js', 'Node.js', 'SASS', 'ContextAPI', 'javaScript', 'TypeScript', 'GSAP'],
  },
  {
    id: 3,
    title: 'project name',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt beatae perferendis praesentium quas, aliquid eum libero expedita hic nemo quaerat sit neque, laboriosam non, culpa cupiditate doloribus? Dignissimos, nesciunt repudiandae.',
    src: '',
    imgUrl: '',
    skills: ['React', 'Next.js', 'Node.js', 'SASS', 'ContextAPI', 'javaScript', 'TypeScript', 'GSAP'],
  },
  {
    id: 4,
    title: 'project name',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt beatae perferendis praesentium quas, aliquid eum libero expedita hic nemo quaerat sit neque, laboriosam non, culpa cupiditate doloribus? Dignissimos, nesciunt repudiandae.',
    src: '',
    imgUrl: '',
    skills: ['React', 'Next.js', 'Node.js', 'SASS', 'ContextAPI', 'javaScript', 'TypeScript', 'GSAP'],
  },
];

export { WORK_EXPERIENCE, EDUCATION, SKILLS, PROJECT_LIST };
