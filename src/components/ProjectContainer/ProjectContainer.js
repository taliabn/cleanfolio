import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <a  
		  href={project.livePreview}
      aria-label='project title live preview'
      className='link link--title' 
      target="_blank"
      rel="noopener noreferrer"
    >
      {project.name}
    </a>
    {/* <h3>Chess</h3> */}
    <p className='project__description'>{project.description}</p>
    {project.collaborator && (
      <p className='project__description'>Developed in collaboration with
        <a
          href={project.collaboratorSite}
          aria-label='source code'
          className='link link--icon'
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.collaborator}
        </a>
      </p>
      )}
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
        target="_blank"
        rel="noopener noreferrer"
      >
        <LaunchIcon />
      </a>
    )}
    </div>
)

export default ProjectContainer
