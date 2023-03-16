import InputSearch from '../../inputSearch/search'
import Comands from './comands/comands'
import './home.css'
function Home() {
return(
<>
    <header>
        <p>Portifolio</p>
        <div>X</div>
    </header>
    <div className='Home'>
        <div className='HomeTyping'>
            <p className='HomeFirst'>HELLO WORLD</p><br />
            <p className='MyName'>CRISTIAN RODRIGUES</p><br />
            <p className='HomeLast'>I AM CODER 'n DESIGNER</p><br />
        </div>
        <Comands />
    </div>
    <InputSearch />
</>
)
}

export default Home