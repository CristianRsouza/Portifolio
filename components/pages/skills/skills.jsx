import { useState } from 'react'
import InputSearch from '../../inputSearch/search'
import './skills.css'

function Skills (){

    const [skills, setSkills] = useState([
        {
            id: 1,
            lang: 'JS',
            level: 'GOOD',
            percent: 65 
        },
        {
            id: 2,
            lang: 'HTML5',
            level: 'GOOD',
            percent: 87 
        },
        {
            id: 3,
            lang: 'CSS',
            level: 'GOOD',
            percent: 90 
        },
        {
            id: 4,
            lang: 'REACTJS',
            level: 'GOOD',
            percent: 70
        },
        {
            id: 5,
            lang: 'NODEJS',
            level: 'MEDIUM',
            percent: 40
        },
        {
            id: 6,
            lang: 'REACTJS',
            level: 'GOOD',
            percent: 70
        },
        {
            id: 7,
            lang: 'PORTUGUES',
            level: 'EXPERT',
            percent: 100
        },
        {
            id: 8,
            lang: 'ENGLISH',
            level: 'GOOD',
            percent: 75
        },
        {
            id: 9,
            lang: 'ESPANOL',
            level: 'MEDIUM',
            percent: 45
        },
    ])

    return(
        <>
            <header>
                <p>Portifolio</p>
                <div>X</div>
            </header>
            <div className='skills'>
                <h1>SKILLS</h1>

                <div className='skills-container'>
                    <div className='lang'>
                        <h1>LANG</h1>{skills.map(lang => <li className='skill'>{lang.lang}</li>)}
                    </div>
                    <div className='level'>
                        <h1>LEVEL</h1>{skills.map(level => <li className='skill'>{level.level}</li>)}
                    </div>
                    <div className='percent'>
                        <h1>PERCENT</h1>{skills.map(percent => <li className='skill'>{percent.percent}%</li>)}
                    </div>

                </div>
            </div>
            <InputSearch/>
        </>
        )
}

export default Skills