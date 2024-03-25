import './CSS/styles.css'
import Header from './Header.tsx'
import Body from './Body'
import DonutAnimation from './DonutAnimation.tsx';
import CardApple from './CardApple.tsx'
import Experience from './Experience.tsx';

const App: React.FC = () => {
  return (
    <div>
      <section>
      <div className='sticky-position'>
        <Header />
      </div>
      <Body />
      <CardApple /> 
      </section>
      
      <section>
        <Experience/>
      </section>

    </div>
  );
};

export default App
