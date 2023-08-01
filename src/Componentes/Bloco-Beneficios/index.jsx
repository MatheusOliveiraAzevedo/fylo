import { useEffect, useState } from 'react'
import './Bloco-Beneficios.css'



const BlocoBeneficios = ({ imagemBotao, imagem, img, botao ,textoBotao , containerBloco, classeTitulo, classeTexto, textoTitulo, textoPar, textoPar2 }) => {

    const [mostratImg, setMostraImg] = useState(false);

    function botaoCentralizado () {


        if (containerBloco === "containerImagem2 container") {
            setMostraImg(true)
        } else {
            setMostraImg(false)
        }
    }

    useEffect(() => {
        botaoCentralizado()

    }, [mostratImg])

    return(
        <section className={containerBloco}>
            <img className={imagem} src={img} alt="" />
            <div>
                <h1 className={classeTitulo}>{textoTitulo}</h1>
                <p className={classeTexto}>{textoPar}</p>
                <p className={classeTexto}>{textoPar2}</p>
                <label>
                    <button className={botao}>{textoBotao}</button>
                    {mostratImg && <img src={imagemBotao} alt="" />}
                    </label>
            </div>
        </section>
    )
}

export default BlocoBeneficios