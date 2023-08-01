import CardBeneficios from '../CardsBeneficios'
import './Beneficios.css'
import img1 from '../../Images/icon-access-anywhere.svg'
import img2 from '../../Images/icon-security.svg'
import img3 from '../../Images/icon-collaboration.svg'
import img4 from '../../Images/icon-any-file.svg'

const Beneficios = ({ classeContainer }) => {

    return(
        <div className={classeContainer}>
            <div className='containerBeneficios'>
                <CardBeneficios classeImg="imgCard" classeTitulo="tituloCard" classeTexto="textoCard" img={img1} titulo="Acesse seus arquivos de onde estiver" texto="Compativel para usar em smartphone, tablet ou computador para acessar sua conta. Isso significa que seus arquivos seguem você onde estiver."/>
                <CardBeneficios classeImg="imgCard" classeTitulo="tituloCard" classeTexto="textoCard" img={img2} titulo="Segurança que você pode confiar" texto="Autenticação de dois fatores e controle de usuarios criptografado são apenas alguns dos recursos de segurança que permitimos para ajudar a proteger seus arquivos"/>
                <CardBeneficios classeImg="imgCard" classeTitulo="tituloCard" classeTexto="textoCard" img={img3} titulo="Colaboração em tempo real" texto="Compartilhe com segurança arquivos e pastas com amigos, familia e colegas para colaboração em tempo real. Não requer anexos de e-mail "/>
                <CardBeneficios classeImg="imgCard" classeTitulo="tituloCard" classeTexto="textoCard" img={img4} titulo="Armazene qualquer tipo de arquivo" texto="Esteja você compartilhando fotos de feriados ou documentos de trabalho, o fylo o cobre, permitindo que todos os tipos de arquivos sejam armazenados e compartilhados com segurança"/>
            </div>
        </div>
    )
}

export default Beneficios