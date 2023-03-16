import InputSearch from '../../inputSearch/search'
import './about.css'

function About () {
    return(
        <>
               <header>
                   <p>Portifolio</p>
                   <div>X</div>
               </header>
               <div className='aboutme'>
                   <h1>ABOUT ME</h1>
                   <div className='about'>
                       <p> I'm Cristian Rodrigues Souza and I'm 15 years old.</p>
                       <p>My first experience with programming was almost 2 years ago</p>
                       <p>and with design, it was around 3 years ago</p>
                   </div>
                   <div className='social'>
                        <a href="https://www.instagram.com/cris.rodsz/">INSTAGRAM</a>
                        <a href="https://github.com/CristianRsouza/">GITHUB</a>
                   </div>
               </div>
               <InputSearch />
               </>
    )
}

export default About