import React from 'react'

const SocialButtons: React.FC = () => {
    return (
        
        <div className='social-container'>
            <a href='/AitorLarrañagaCV.pdf' target="_blank" className="button-smaller no-style">CV</a>
            <a href='https://github.com/chiwaka03' target="_blank" className='button-smaller no-style'>Git</a>
            <a href='https://www.linkedin.com/in/aitor-larra%C3%B1aga-857636270/' target="_blank" className='button-smaller no-style'>In</a>
        </div>
    );
};

export default SocialButtons