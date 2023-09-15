import banner1 from './assets/img/1.png';
import BannerControle from './components/BannerControle';
import GestorDados from './components/GestorDados';
import './App.css'
import ListaDados from './components/ListaDados';
import AppTamanhoImages from './components/AppTamanhoImages';
import ListaAlunosSorteio from './components/ListaAlunosSorteio';

function App() {
  const w=600
  const h=240
  return (
    <>
      <div>
        <nav>
          Cabeçalho
        </nav>
        <div>
          <img src={banner1} alt="Banner Anuncio" width={w} height={h} />
        </div>
        <div>
          <BannerControle />
        </div>
        <div>
          <GestorDados />
        </div>
        <div>
          <ListaDados/>
        </div>
        <div>
          <AppTamanhoImages />
        </div>
        <div>
          <ListaAlunosSorteio />
        </div>
      </div>
    </>
  )
}

export default App
