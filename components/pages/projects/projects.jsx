import InputSearch from '../../inputSearch/search'
import './projects.css'

function Projects () {
    return(
        <>
              <header>
                  <p>Portifolio</p>
                 <div>X</div>
             </header>
             <div className='projects'>
                <h1>PROJECTS</h1>
                    <div className='projects-container'>
                        <a href='https://github.com/CristianRsouza/TodoList-FullStack' className='project'>Todo-List FullStack</a>
                        <a href='https://github.com/CristianRsouza/WheaterApi' className='project'>WheaterApp</a>
                        <a href='https://github.com/CristianRsouza/RichText-Editor' className='project'>RichText Editor</a>
                    </div>

             </div>
             <InputSearch/>
        </>
    )
}

export default Projects