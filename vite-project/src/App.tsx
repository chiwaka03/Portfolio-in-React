import './CSS/styles.css'
import Header from './Header.tsx'
import Body from './Body'
import DonutAnimation from './DonutAnimation.tsx';
import CardApple from './CardApple.tsx'

const App: React.FC = () => {
  return (
    <div>
      <section>
        <Header />
        <Body />
        <CardApple /> 
      </section> 

    </div>
  );
};

export default App
