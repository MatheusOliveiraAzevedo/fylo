import { useState } from 'react'
import './Email.css'

const Email = () => {


    const [email, setEmail] = useState("");
    const [mostrarErro, setMostrarErro] = useState(false)


    function atualizaEmail (event) {
        setEmail(event.target.value);
    }

    function verificaEmail (event) {
    
        if (contemEmail(email, "@")) {
            setMostrarErro(false)
            return
        } else {
            setMostrarErro(true)
        }
    }

    function contemEmail(str, char) {
        return str.indexOf(char) !== -1;
    }



    return(
        <div className='containerEmail'>
            <section className='blocoEmail'>
                <h2>Tenha acesso antecipado hoje</h2>
                <p>Leva apenas um minuto para se inscrever e nosso nível inicial gratuito é extremamente generoso. se você tiver alguma dúvida, nossa equipe de suporte ficará feliz em ajudá-lo.</p>
                <div className="envio">
                    <input onChange={atualizaEmail} placeholder='email@example.com' type="email" />
                    <button onClick={verificaEmail}> Inicie Gratuitamente</button>
                    {mostrarErro && <span className='erro'>Digite um e-mail valido!</span>}
                </div>
            </section>
        </div>
    )
}

export default Email