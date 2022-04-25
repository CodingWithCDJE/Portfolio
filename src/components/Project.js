import '../css/Project.css';

const Project = ({ name, url, gif, sourceCode, description }) => {
  return (
    <div className='project-container'>
      <div className='project-left'>
        <h2 className='project-header'>{name}</h2>
        <p className='project-description'>{description}</p>
        <a
          className='project-anchor'
          href={url}
          target='_blank'
          rel='noreferrer'
        >
          See Live
        </a>
        <a
          className='project-anchor'
          href={sourceCode}
          target='_blank'
          rel='noreferrer'
        >
          Source Code
        </a>
      </div>

      <div className='project-right'>
        <a href={url} target='_blank' rel='noreferrer'>
          <img className='project-img' src={gif} alt='Giphy Project' />{' '}
        </a>
      </div>
    </div>
  );
};

export default Project;
