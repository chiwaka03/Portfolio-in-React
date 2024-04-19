import './CSS/styles.css'
import Body from './Body'
import DonutAnimation from './DonutAnimation.tsx';
import Experience from './Experience.tsx';
import Experience2 from './Experience2.tsx';
import Experience3 from './Experience3.tsx';
import AboutMe from './AboutMe.tsx';
import SocialButtons from './SocialButtons.tsx';
import PersonalProjects from './PersonalProjects.tsx';
import PersonalProjects2 from './PersonalProjects2.tsx';
import PortfolioExplain from './PortfolioExplain.tsx';

const App: React.FC = () => {
  return (
    <div className='first-part'>
      <div className='half-1'>
        <div>
          <Body />
        </div>
      </div>
      <SocialButtons />
      <div className='half-2'>
        <div>
          <AboutMe />
        </div>
        <div className='spacer'></div>
        <Experience />

        <div className='spacer-experience'></div>
        <Experience2 />

        <div className='spacer-experience'></div>
        <Experience3 />
        
        <div className='spacer'></div>
        <PersonalProjects />
        <div className='spacer-experience'></div>
        <PersonalProjects2/>
        <div className='spacer-experience'></div>
        <PortfolioExplain/> 

      </div>
    </div>
    
  );
};

export default App
