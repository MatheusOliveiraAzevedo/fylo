import './CardBeneficios.css'

const CardBeneficios = ({ classeTexto, classeTitulo, classeImg, img, titulo, texto }) => {

    return(
        <section className='card'>
            <img className={classeImg} src={img} alt="" />
            <h2 className={classeTitulo}>{titulo}</h2>
            <p className={classeTexto}>{texto}</p>
        </section>
    )
}

export default CardBeneficios