import './App.css';
import Emoji from 'react-emoji-render';
import Names from './names'
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Emoji text=":baby: Name Generator :baby:" />
      <Names />
    </div>
  );
}

export default App;
