import './Cabecalho.css'
import logo from '../../Images/logo.svg'
import Navbar from '../Navbar'
import BlocoBeneficios from '../Bloco-Beneficios'

const Cabecalho = () => {

    return(
        <section className='cabecalho'>
            <img src={logo} alt="" />
            <Navbar/>
        </section>
    )
}

export default Cabecalho