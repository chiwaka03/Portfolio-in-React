import React from 'react'

const Body: React.FC = () => {
    return (
        <div className='body-container'>
          <h1 className='title'>¡Hola, soy Aitor!</h1>
          <h2 className='title'>Junior Backend Developer</h2>
          <div className='text-alchemist'>
              <p>Soy un alquimista digital, transformando ideas en interfaces 
              y códigos en experiencias mágicas que encantan y sorprenden.</p>
          </div>
          <button className="button-smaller">CV</button>
          
        </div>
        
      );
  };

export default Body