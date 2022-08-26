import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  const productos = [];
  return (
    <div>
      <NavBar items={productos}/>
      <ItemListContainer greeting="¡Aca va a ir el catálogo!"/>
    </div>
  );
}

export default App;
