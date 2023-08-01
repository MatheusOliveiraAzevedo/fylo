import Depoimentos from '../Depoimentos'
import './BlocoDepoimentos.css'
import imgPerfil1 from '../../Images/profile-1.jpg';
import imgPerfil2 from '../../Images/profile-2.jpg';
import imgPerfil3 from '../../Images/profile-3.jpg';

const BlocoDepoimentos = () => {

    return (
        <div className='cardsDepoimentos'>
            <Depoimentos depoimento="A Fylo melhorou a produtividade de nossa equipe em uma ordem de magnitude. Desde a mudança, nossa equipe se tornou uma máquina de colaboração bem lubrificada." nomePerfil="Satish Patel" imgPerfil={imgPerfil1} ocupacaoPerfil="Fouter & CEO, Huddle"/>
            <Depoimentos depoimento="A Fylo melhorou a produtividade de nossa equipe em uma ordem de magnitude. Desde a mudança, nossa equipe se tornou uma máquina de colaboração bem lubrificada." nomePerfil="Bruce McKenzie" imgPerfil={imgPerfil2} ocupacaoPerfil="Fouter & CEO, Huddle"/>
            <Depoimentos depoimento="A Fylo melhorou a produtividade de nossa equipe em uma ordem de magnitude. Desde a mudança, nossa equipe se tornou uma máquina de colaboração bem lubrificada." nomePerfil="Iva Boyd" imgPerfil={imgPerfil3} ocupacaoPerfil="Fouter & CEO, Huddle"/>
        </div>
    )
}

export default BlocoDepoimentos