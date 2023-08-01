import './Rodape.css'
import logo from '../../Images/logo.svg'
import instagram from '../../Images/instagram.png'
import twitter from '../../Images/twitter.png'
import facebook from '../../Images/facebook.png'
import imgPin from '../../Images/icon-location.svg'
import imgGmail from '../../Images/icon-email.svg'
import imgTelefone from '../../Images/icon-phone.svg'


const Rodape = () => {

    return (
        <footer className='blocoRodape'>
            <div className='rodape'>
                <img className='logoRodape' src={logo} alt="" />
                <section className='contatos'>
                    <img src={imgPin} alt="" />
                    <span className='local'>Sed sem leo, ultrices sit amet metus nec, mollis efficitur nisl. Proin tincidunt posuere arcu, et aliquet purus iaculis tempus.  </span>
                    <span className='telefone'><img src={imgTelefone} alt="" />+1-543-123-4567</span>
                    <span className='contatoEmail'><img src={imgGmail} alt="" />exemple@fylo.com</span>
                </section>
                <section className='menuRodape'>
                    <ul className="listaRodape">
                        <li><a href="/">Sobre nós</a></li>
                        <li><a href="/">Trabalhos</a></li>
                        <li><a href="/">Impresa</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Fale conosco</a></li>
                        <li><a href="/">Termos</a></li>
                        <li><a href="/">Privacidade</a></li>
                    </ul>
                </section>
                <section className='midias'>
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                </section>
            </div>

        </footer>
    )
}

export default Rodape