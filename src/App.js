import './App.css';
import BlocoBeneficios from './Componentes/Bloco-Beneficios';
import Cabecalho from './Componentes/Cabecalho';
import imgBloco from '../src/Images/illustration-intro.png'
import imgBloco2 from '../src/Images/illustration-stay-productive.png'
import Beneficios from './Componentes/Beneficios';
import BlocoDepoimentos from './Componentes/BlocoDepoimentos';
import Email from './Componentes/Email';
import Rodape from './Componentes/Rodape';
import seta from '../src/Images/icon-arrow.svg'

function App() {
  return (
    <div className="App">

      <Cabecalho/>

      <BlocoBeneficios 
      textoTitulo="Todos os seus arquivos em um local Seguro" 
      textoPar="Fylo armazena todos os seus arquivos mais importantes em um lugar seguro." 
      textoPar2="Acesse onde precisar, compartilhe e colabore com amigos, familia, e colegas de trabalho" 
      containerBloco="containerImagem container" 
      img={imgBloco} 
      textoBotao="Iniciar" 
      botao="botao" 
      classeTitulo="titulo" 
      classeTexto="texto" imagem="imagem"
      />

      <Beneficios classeContainer="beneficios"/>

      <BlocoBeneficios 
      imagemBotao={seta} 
      textoTitulo="Seja produtivo onde estiver" 
      textoPar="Nunca deixe a localização ser um problema ao acessar seus arquivos. Fylo tem cobertura para todas as suas necessidades de armazenamento de arquivos." 
      textoPar2="Compartilhe arquivos e pastas com segurança com amigos, familiares e colegas para colaboração em tempo real. Não são necessários anexos de e-mail" 
      containerBloco="containerImagem2 container" 
      img={imgBloco2} 
      textoBotao="Veja como Fylo funciona" 
      botao="botao botao2" 
      classeTitulo="titulo titulo2" 
      classeTexto="texto texto2" 
      imagem="imagem imagem2"
      />

      <section className='blocoDepoimentos'>
        <BlocoDepoimentos/>
      </section>

      <Email/>

      <Rodape/>

    </div>
  );
}

export default App;
