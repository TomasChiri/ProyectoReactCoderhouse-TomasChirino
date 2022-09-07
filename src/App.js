import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  const productos = [];
  return (
    <div>
      <NavBar items={productos}/>
      <ItemListContainer greeting="¡Aca va a ir el catálogo!"/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
