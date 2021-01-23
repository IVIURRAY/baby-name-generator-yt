import Emoji from 'react-emoji-render';
import NameContainer from '../containers/NameContainer';
import ButtonContainer from '../containers/ButtonContainer';
import './App.css';
import Emoji from 'react-emoji-render';
import Names from './names'
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Emoji text=":baby: Name Generator :baby:" />
      <NameContainer />
      <ButtonContainer />
    </div>
  );
}

export default App;
