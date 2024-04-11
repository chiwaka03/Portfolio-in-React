import './CSS/styles.css'
import Body from './Body'
import DonutAnimation from './DonutAnimation.tsx';
import Experience from './Experience.tsx';
import AboutMe from './AboutMe.tsx';
import Experience2 from './Experience2.tsx';

const App: React.FC = () => {
  return (
    <div className='first-part'>
      <div className='half-1'>
        <div>
          <Body />
        </div>
      <div className="transition-line"></div> 
      </div>
      
      <div className='half-2'>
        <div>
          <AboutMe />
        </div>
        <div className='spacer'></div>
        <Experience />
        <div className='spacer-experience'></div>
        <Experience2 />
        <section></section>
      </div>
    </div>
    
  );
};

export default App
