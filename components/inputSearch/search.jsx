import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './search.css'

const InputSearch = () => {

    const navigate = useNavigate();
    const [valueSearch, setValueSearch] = useState('');
  
    const HandleInputSearch = (e) => {
      setValueSearch(e.target.value);
    };
  
    const HandleSearch = (e) => {
      if (e.keyCode === 13 && valueSearch === 'skills') {
        navigate('/skills');
      }
      if (e.keyCode === 13 && valueSearch === 'aboutme') {
        navigate('/aboutme');
      }
      if (e.keyCode === 13 && valueSearch === 'projects') {
        navigate('/projects');
      }
    };

    return(
        <div className='InputSearch'>
            <input 
              type="text" 
              value={valueSearch} 
              onChange={HandleInputSearch} 
              onKeyDown={HandleSearch} 
              autoFocus 
              placeholder={'Typing:skills, projects, ...'}
            />
        </div>
    )
}

export default InputSearch
