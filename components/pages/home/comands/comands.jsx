import './comands.css'
import { Link } from 'react-router-dom'

const Comands = () => {
    return(
        <div className='Comands'>
            <Link className='ComandsTitle'><h1>Comands</h1></Link>
            <Link className='Comand' to={'/skills'}><h1>skill</h1></Link>
            <Link className='Comand' to={'/Projects'}><h1>projects</h1></Link>
            <Link className='Comand' to={'/AboutMe'}><h1>aboutme</h1></Link>
        </div>
    )
}

export default Comands