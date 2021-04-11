import Emoji from 'react-emoji-render';
import NameContainer from '../containers/NameContainer';
import ButtonContainer from '../containers/ButtonContainer';
import SavedNames from '../containers/SavedNames';
import './App.css';

function App() {
  return (
    <div className="App">
      <Emoji text=":baby: Name Generator :baby:" />
      <NameContainer />
      <ButtonContainer />
      <SavedNames />
    </div>
  );
}

export default App;
