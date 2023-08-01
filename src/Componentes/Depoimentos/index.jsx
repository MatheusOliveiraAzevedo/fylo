import './Depoimentos.css'

const Depoimentos = ({ depoimento, nomePerfil, imgPerfil, ocupacaoPerfil }) => {

    return(
        <section className='depoimento'>
            <p className="textoDepoimento">{depoimento}</p>
            <div className="perfil">
                <img src={imgPerfil} alt="" />
                <h6>{nomePerfil}</h6>
                <p>{ocupacaoPerfil}</p>
            </div>
        </section>
    )
}

export default Depoimentos