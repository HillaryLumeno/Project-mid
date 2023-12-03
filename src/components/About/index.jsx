const About = () => {
  return (
    <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
                <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                    <div className="about-img">
                        <img src="/public/img/Hill1.jpg" alt="Image" />
                    </div>
                    </div>
                    <div className="col-lg-6">
                    <div className="about-content">
                        <div className="section-header text-left">
                        <p>Learn About Me</p>
                        <h2>2 Years Experience</h2>
                        </div>
                        <div className="about-text">
                        <p>
                        Two years as a computer science student have enriched my understanding of programming fundamentals, 
                        algorithms, and computer networks. Through various learning projects, I've honed problem-solving skills, 
                        teamwork, and expanded my social network with diverse peers.
                        This has provided a solid foundation to face the future developments in technology.
                        </p>
                        </div>
                        <div className="skills">
                        <div className="skill-name">
                            <p>Web Design</p><p>85%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="skill-name">
                            <p>Web Development</p><p>95%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="skill-name">
                            <p>Apps Design</p><p>90%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="skill-name">
                            <p>Apps Development</p><p>85%</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        </div>
                        <a className="btn" href>Learn More</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
  )
}

export default About