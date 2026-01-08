import React from 'react';
import './Projects.css';

const projectsData = [
    {
        title: "FOBOIPARA (Bank of India)",
        desc: "Pushing creative boundaries and technologies, you've come to the right place",
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Website Development"],
        overlayTitle: "FEDERATION OF BANK OF INDIA PENSIONERS AND RETIREES ASSOCIATIONS",
        link: "https://foboipara.in"
    },
    {
        title: "Brightix",
        desc: "Years of experience to create unique design in agile and fast manner",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["SEO"],
        overlayTitle: "Launch Your Tech Career with Real-World Experience",
        link: "https://brightix.in"
    },
    {
        title: "Prabhat Electricals",
        desc: "This way, we can cut out all the project management and focus just on the design processes",
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        tags: ["Google Business Profile"],
        overlayTitle: "POWERING process ELECTRIFYING VISION."
    }
];

const ProjectCard = ({ project }) => {
    const CardContent = () => (
        <>
            <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                    <span className="arrow-icon">↗</span>
                </div>
                <div className="project-text-overlay">
                    <h3>{project.overlayTitle}</h3>
                </div>
            </div>
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="tags">
                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
            </div>
        </>
    );

    return project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
            <CardContent />
        </a>
    ) : (
        <div className="project-card">
            <CardContent />
        </div>
    );
};

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="projects__header">
                    <span className="text-serif italic-label">Projects</span>
                    <h2 className="projects__title">Selected works</h2>
                    <p className="projects__subtitle">Years of experience to create unique design in agile and fast manner</p>
                </div>

                <div className="projects__carousel">
                    <div className="projects__track">
                        {/* Set 1 */}
                        {projectsData.map((project, index) => (
                            <ProjectCard key={`p1-${index}`} project={project} />
                        ))}
                        {/* Set 2 (Duplicate) */}
                        {projectsData.map((project, index) => (
                            <ProjectCard key={`p2-${index}`} project={project} />
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Projects;
