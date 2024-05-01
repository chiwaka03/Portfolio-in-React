import React from 'react';
import './CSS/MyKnowledgeList.css';

const MyKnowledgeList: React.FC = () => {

    return (
        <div className='knowledge-container'>
            <h2 className='centered-text'>Mis conocimientos</h2>
            <div className='knowledge-list-container'>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className="knowledge-icon" alt="Java"  />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="knowledge-icon" alt="Python" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" className="knowledge-icon" alt="Flask"  />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" className="knowledge-icon" alt="Flutter"  />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" className="knowledge-icon" alt="WordPress"  />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" className="knowledge-icon" alt="MySQL"  />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg" className="knowledge-icon" alt="Unreal Engine"  />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="knowledge-icon" alt="CSS3" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="knowledge-icon" alt="HTML5"  />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="knowledge-icon" alt="Git" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="knowledge-icon" alt="GitHub" />
            </div>
        </div>
    );
};

export default MyKnowledgeList;
