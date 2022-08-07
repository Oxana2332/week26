import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AddWord from './components/AddWord';
import Card from './components/Card';
import CardTraining from './components/CardTraining';
import DeleteWord from './components/DeleteWord';
import Dictionary from './components/Dictionary';
import EditWord from './components/EditWord';
import Iknow from './components/Iknow';
import MainPage from './components/MainPage';
import Notknow from './components/Notknow';
import Word from './components/Word';
import WordList from './components/WordList';

function App() {
  return (
    <div className="App">
    <Header />
    <MainPage>

      <Dictionary>
        <WordList>
          <Word>
          <EditWord />
          <DeleteWord />
          </Word>
          <AddWord />
        </WordList>
      </Dictionary>

      <CardTraining>
        <Card />
        <Iknow />
        <Notknow />
      </CardTraining>
      
    </MainPage>
    <Footer />
    </div>
  );
}

export default App;
