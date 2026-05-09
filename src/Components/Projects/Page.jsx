import './Page.css'

// Displays a single project "book page"
const Page = ({project, className}) => {
    return ( 
        <div className={className}>

            {/* Project preview image */}
            <img src={project.image} alt={project.title} className='project-image'/>
            
            {/* Project title */}
            <h3 className='project-title'>{project.title}</h3>

            {/* Project description */}
            <p className="project-description">
                {project.description}
            </p>

            {/* Tech stack used in project */}
            <div className="project-tech">
                {project.tech.map((item, index) => (
                    <span key ={index}>{item}</span>
                ))}
            </div>

            {/* External links */}
            <div className="project-buttons">

                <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                </a>

                <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                </a>

            </div>
        </div>
    );
}
 
export default Page;
