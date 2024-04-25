import './CSS/Carousel.css';

function TechStack() {

  return (
    <div className="tech-stack">
      <div className="tech-stack-section">
        <h2>Front-end</h2>
        <div className="tech-stack-slider">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" height={"50"} width={"50"} />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" height={"50"} width={"50"}  />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" height={"50"} width={"50"}  />
        </div>
      </div>

      <div className="tech-stack-section">
        <h2>Back-end</h2>
        <div className="tech-stack-slider">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" height={"50"} width={"50"}  />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" height={"50"} width={"50"} />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" height={"50"} width={"50"} />
        </div>
      </div>

      <div className="tech-stack-section">
        <h2>Extras</h2>
        <div className="tech-stack-slider">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" height={"50"} width={"50"}  />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" height={"50"} width={"50"} />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" height={"50"} width={"50"} />
        </div>
      </div>
    </div>
  );
}

export default TechStack;
