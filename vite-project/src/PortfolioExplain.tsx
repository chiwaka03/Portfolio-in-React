import React from 'react'

const PortfolioExplain: React.FC = () => {
    return (

        <div className='final-text'>
            Este proyecto se creó utilizando <a href='https://es.react.dev/' target='_blank' rel="noopener noreferrer">React</a> y se ha desplegado en 
            <a href='https://vercel.com/' target='_blank' rel="noopener noreferrer"> Vercel</a>.
            Utiliza la tipografía<a href='https://fonts.google.com/specimen/Playfair+Display' target='_blank' rel="noopener noreferrer"> Playfair Display </a>
             y el código se desarrolló en
             <a href='https://code.visualstudio.com/' target='_blank' rel="noopener noreferrer"> Visual Studio Code</a>.
              Para los estilos, se empleó CSS sin librerías adicionales.
        </div>
    );
};

export default PortfolioExplain